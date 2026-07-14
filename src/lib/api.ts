// Single seam for 3rd-party integrations (booking, availability, forms).
// Swap the impl (Calendly / NexHealth / Zocdoc / custom REST) without touching UI.

export type BookingPayload = {
  service: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone?: string;
  notes?: string;
};

export type BookingResult = { ok: true; id: string } | { ok: false; error: string };

export async function submitBooking(payload: BookingPayload): Promise<BookingResult> {
  const base = process.env.CLINIC_API_BASE_URL;
  if (!base) return { ok: true, id: `mock_${Date.now()}` };
  try {
    const res = await fetch(`${base}/appointments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(process.env.CLINIC_API_KEY ? { Authorization: `Bearer ${process.env.CLINIC_API_KEY}` } : {})
      },
      body: JSON.stringify(payload)
    });
    if (!res.ok) return { ok: false, error: `HTTP ${res.status}` };
    const data = await res.json();
    return { ok: true, id: data.id ?? 'unknown' };
  } catch (e) {
    return { ok: false, error: (e as Error).message };
  }
}

// Placeholder for pulling live availability, doctor lists, reviews, etc.
export async function fetchAvailability(_serviceSlug: string): Promise<string[]> {
  const base = process.env.CLINIC_API_BASE_URL;
  if (!base) return ['9:00 AM','10:30 AM','12:00 PM','1:30 PM','3:00 PM','4:30 PM'];
  const res = await fetch(`${base}/availability?service=${_serviceSlug}`, { next: { revalidate: 300 } });
  if (!res.ok) return [];
  return res.json();
}
