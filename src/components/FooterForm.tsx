'use client';
import { useState } from 'react';
import { submitEnquiry } from '@/lib/api';

export default function FooterForm() {
  const [f, setF] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 16px',
    borderRadius: 12,
    border: '1px solid hsl(var(--ink-foreground) / 0.14)',
    background: 'hsl(var(--ink-foreground) / 0.06)',
    color: 'hsl(var(--ink-foreground))',
    fontFamily: 'inherit',
    fontSize: 14,
    outline: 'none'
  };

  const submit = async () => {
    if (!f.name || !f.email || !f.message) { setErr('Please fill all fields.'); return; }
    setBusy(true);
    setErr(null);
    const res = await submitEnquiry(f);
    setBusy(false);
    if (res.ok) setSent(true);
    else setErr(res.error || 'Something went wrong.');
  };

  if (sent) return (
    <div style={{ textAlign: 'center', padding: '44px 10px' }}>
      <div style={{ width: 62, height: 62, borderRadius: '50%', background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, margin: '0 auto 18px' }}>✓</div>
      <div className="font-serif" style={{ fontWeight: 600, fontSize: 26 }}>Thanks, {f.name}!</div>
      <div style={{ fontSize: 14, opacity: .72, marginTop: 8, lineHeight: 1.6 }}>
        We&apos;ve received your enquiry and will get back to you shortly.
      </div>
    </div>
  );

  return (
    <div>
      <div className="font-serif" style={{ fontWeight: 600, fontSize: 25, marginBottom: 8 }}>Get in touch</div>
      <div style={{ fontSize: 13.5, opacity: .7, marginBottom: 20 }}>
        Questions about a treatment, pricing, or your appointment? Send us a note.
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <input value={f.name} onChange={e => setF({ ...f, name: e.target.value })} placeholder="Your Full Name" style={inputStyle} />
        <input value={f.email} onChange={e => setF({ ...f, email: e.target.value })} placeholder="Email Address" type="email" style={inputStyle} />
        <textarea
          value={f.message}
          onChange={e => setF({ ...f, message: e.target.value })}
          placeholder="How can we help?"
          rows={4}
          style={{ ...inputStyle, resize: 'vertical', minHeight: 110 }}
        />
      </div>

      {err && (
        <div style={{ marginTop: 12, fontSize: 13, color: 'hsl(var(--primary))' }}>{err}</div>
      )}

      <button
        onClick={submit}
        disabled={busy}
        style={{
          marginTop: 18,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 14,
          border: 'none',
          background: 'hsl(var(--primary))',
          color: 'hsl(var(--primary-foreground))',
          fontFamily: 'inherit',
          fontWeight: 700,
          fontSize: 15,
          padding: '6px 6px 6px 24px',
          borderRadius: 12,
          cursor: busy ? 'wait' : 'pointer',
          opacity: busy ? .7 : 1,
          boxShadow: '0 14px 30px -12px hsl(var(--primary) / 0.8)'
        }}
      >
        {busy ? 'Sending…' : 'Enquire'}
        <span style={{ width: 38, height: 38, borderRadius: 9, background: 'hsl(var(--primary-foreground) / 0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>→</span>
      </button>
    </div>
  );
}
