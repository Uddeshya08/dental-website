import Link from 'next/link';
import type { Doctor } from '@/lib/data';

type Props = { doctor: Doctor };

export default function DoctorDetail({ doctor: d }: Props) {
  return (
    <>
      {/* HERO */}
      <section data-reveal style={{ maxWidth: 1180, margin: '0 auto', padding: '48px 24px 24px' }}>
        <Link
          href="/#team"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: 'hsl(var(--muted))', textDecoration: 'none', marginBottom: 22 }}
        >
          ← Back to team
        </Link>
        <div style={{ display: 'grid', gridTemplateColumns: '.9fr 1.1fr', gap: 44, alignItems: 'center' }}>
          <div style={{ aspectRatio: '4/5', borderRadius: 26, overflow: 'hidden', border: '1px solid hsl(var(--border) / 0.7)', boxShadow: '0 30px 60px -30px hsl(var(--primary) / 0.4)' }}>
            <img src={d.img} alt={d.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'hsl(var(--accent))' }}>{d.role}</div>
            <h1 className="font-serif" style={{ fontWeight: 600, fontSize: 50, lineHeight: 1.05, letterSpacing: '-.02em', margin: '12px 0 16px' }}>{d.name}</h1>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '9px 14px', borderRadius: 999, background: 'hsl(var(--primary) / 0.1)', border: '1px solid hsl(var(--primary) / 0.2)', fontSize: 13, fontWeight: 600, color: 'hsl(var(--primary))' }}>
                <span style={{ fontSize: 14 }}>★</span> {d.rating} rating
              </div>
              {d.experience && (
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '9px 14px', borderRadius: 999, background: 'hsl(var(--muted-bg))', border: '1px solid hsl(var(--border))', fontSize: 13, fontWeight: 600, color: 'hsl(var(--foreground))' }}>
                  {d.experience}
                </div>
              )}
            </div>

            {d.qualifications && d.qualifications.length > 0 && (
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 26px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {d.qualifications.map((q, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14.5, color: 'hsl(var(--foreground))' }}>
                    <span style={{ flex: 'none', width: 18, height: 18, borderRadius: '50%', background: 'hsl(var(--success) / 0.16)', color: 'hsl(var(--success))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800 }}>✓</span>
                    {q}
                  </li>
                ))}
              </ul>
            )}

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <Link href="/book" style={{ background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))', fontWeight: 700, fontSize: 15, padding: '14px 24px', borderRadius: 999, textDecoration: 'none', boxShadow: '0 14px 30px -12px hsl(var(--primary) / 0.85)' }}>
                Book appointment
              </Link>
              {d.practoUrl && (
                <a href={d.practoUrl} target="_blank" rel="noopener noreferrer" style={{ border: '1px solid hsl(var(--border))', background: 'hsl(var(--surface) / 0.6)', color: 'hsl(var(--foreground))', fontWeight: 600, fontSize: 15, padding: '14px 22px', borderRadius: 999, textDecoration: 'none' }}>
                  View Practo profile ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* BIO */}
      {d.bio && d.bio.length > 0 && (
        <section data-reveal style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px 0' }}>
          <h2 className="font-serif" style={{ fontWeight: 600, fontSize: 34, letterSpacing: '-.02em', margin: '0 0 20px' }}>About {d.name.replace(/^Dr\.\s*/, 'Dr. ').split(' ').slice(0, 2).join(' ')}</h2>
          {d.bio.map((p, i) => (
            <p key={i} style={{ fontSize: 16, lineHeight: 1.75, color: 'hsl(var(--muted))', margin: '0 0 18px' }}>{p}</p>
          ))}
        </section>
      )}

      {/* SPECIALTIES */}
      {d.specialties && d.specialties.length > 0 && (
        <section data-reveal style={{ maxWidth: 1180, margin: '0 auto', padding: '72px 24px 0' }}>
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 34px' }}>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'hsl(var(--accent))' }}>Specialties</div>
            <h2 className="font-serif" style={{ fontWeight: 600, fontSize: 38, letterSpacing: '-.02em', margin: '10px 0 12px' }}>What {d.pronoun === 'he' ? 'he' : d.pronoun === 'they' ? 'they' : 'she'} treats</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {d.specialties.map((s, i) => (
              <div key={i} style={{ padding: 26, borderRadius: 'var(--radius)', background: 'hsl(var(--surface) / 0.62)', backdropFilter: 'blur(14px)', border: '1px solid hsl(var(--border) / 0.7)' }}>
                <span style={{ display: 'flex', width: 48, height: 48, borderRadius: 14, alignItems: 'center', justifyContent: 'center', background: 'hsl(var(--primary) / 0.12)', color: 'hsl(var(--primary))', fontSize: 22 }}>{s.icon}</span>
                <div className="font-serif" style={{ marginTop: 14, fontWeight: 600, fontSize: 19 }}>{s.title}</div>
                <div style={{ marginTop: 8, fontSize: 14.5, lineHeight: 1.55, color: 'hsl(var(--muted))' }}>{s.body}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* REVIEWS */}
      {d.reviews && d.reviews.length > 0 && (
        <section data-reveal style={{ maxWidth: 1180, margin: '0 auto', padding: '72px 24px 0' }}>
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 34px' }}>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'hsl(var(--accent))' }}>Patient Reviews</div>
            <h2 className="font-serif" style={{ fontWeight: 600, fontSize: 38, letterSpacing: '-.02em', margin: '10px 0 6px' }}>What patients say</h2>
            <div style={{ fontSize: 15, color: 'hsl(var(--muted))' }}>{d.rating} average across all visits · verified patients</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {d.reviews.map((r, i) => (
              <div key={i} style={{ padding: 28, borderRadius: 'var(--radius)', background: 'hsl(var(--surface) / 0.62)', backdropFilter: 'blur(16px)', border: '1px solid hsl(var(--border) / 0.7)', boxShadow: '0 12px 40px -22px hsl(var(--primary) / 0.3)' }}>
                <div style={{ color: 'hsl(var(--primary))', fontSize: 15, letterSpacing: 2 }}>
                  {'★'.repeat(Math.max(0, Math.min(5, r.rating)))}
                </div>
                <p className="font-serif" style={{ fontSize: 17, lineHeight: 1.55, color: 'hsl(var(--foreground))', margin: '14px 0 20px' }}>&ldquo;{r.quote}&rdquo;</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(140deg,hsl(var(--primary)),hsl(var(--accent)))', border: '2px solid hsl(var(--surface))' }} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>{r.name}</div>
                    {r.meta && <div style={{ fontSize: 12.5, color: 'hsl(var(--muted))' }}>{r.meta}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
