'use client';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { DOCTORS, type Doctor } from '@/lib/data';

type Props = {
  heading?: string;
  emphasis?: string;
  tabs?: string[];
  groups?: Record<string, Doctor[]>;
};

export default function Team({
  heading = 'The Help You Need When You ',
  emphasis = 'Need It',
  tabs = ['Dentist'],
  groups = DOCTORS
}: Props) {
  const [active, setActive] = useState(tabs[0]);
  const [selected, setSelected] = useState<Doctor | null>(null);
  const doctors = groups[active] || [];

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelected(null); };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [selected]);

  return (
    <section data-reveal style={{ maxWidth:1180, margin:'0 auto', padding:'96px 24px 0' }}>
      <h2 className="font-serif" style={{ fontWeight:600, fontSize:42, lineHeight:1.1, letterSpacing:'-.02em', textAlign:'center', margin:'0 0 34px' }}>
        {heading}<span style={{ fontStyle:'italic', color:'hsl(var(--primary))' }}>{emphasis}</span>
      </h2>
      <div style={{ borderRadius:28, padding:26, background:'hsl(var(--surface-2) / 0.85)', backdropFilter:'blur(16px)', border:'1px solid hsl(var(--border) / 0.7)', boxShadow:'0 24px 60px -30px hsl(var(--primary) / 0.35)' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', gap:16, marginBottom:24, flexWrap:'wrap' }}>
          <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
            {tabs.map(t => {
              const on = active === t;
              return (
                <button key={t} onClick={() => setActive(t)} style={{ border:`1px solid ${on ? 'hsl(var(--foreground))' : 'hsl(var(--border))'}`, background: on ? 'hsl(var(--foreground))' : 'transparent', color: on ? 'hsl(var(--background))' : 'hsl(var(--muted))', fontWeight:600, fontSize:14, padding:'10px 20px', borderRadius:999, cursor:'pointer', fontFamily:'inherit' }}>{t}</button>
              );
            })}
          </div>
          <div style={{ display:'flex', gap:10 }}>
            <span style={{ width:40, height:40, borderRadius:'50%', border:'1px solid hsl(var(--border))', display:'flex', alignItems:'center', justifyContent:'center', color:'hsl(var(--muted))' }}>←</span>
            <span style={{ width:40, height:40, borderRadius:'50%', background:'hsl(var(--foreground))', color:'hsl(var(--background))', display:'flex', alignItems:'center', justifyContent:'center' }}>→</span>
          </div>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:16 }}>
          {doctors.map((d, i) => (
            <button
              key={`${active}-${i}`}
              onClick={() => setSelected(d)}
              style={{ background:'hsl(var(--surface))', border:'1px solid hsl(var(--border) / 0.7)', borderRadius:20, padding:22, display:'flex', flexDirection:'column', textAlign:'left', cursor:'pointer', fontFamily:'inherit', transition:'transform .2s, box-shadow .2s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 18px 40px -20px hsl(var(--primary) / 0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div className="font-serif" style={{ fontWeight:600, fontSize:18 }}>{d.name}</div>
              <div style={{ fontSize:13, color:'hsl(var(--muted))', marginTop:2 }}>{d.role}</div>
              <div style={{ margin:'18px auto', width:118, height:118, borderRadius:'50%', overflow:'hidden', border:'1px solid hsl(var(--border))' }}>
                <img src={d.img} alt={d.name} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
              </div>
              <div style={{ marginTop:'auto', display:'flex', justifyContent:'space-between', alignItems:'flex-end', gap:8 }}>
                <div>
                  <div style={{ fontSize:12, color:'hsl(var(--muted))' }}>Head of Department</div>
                  <div style={{ fontSize:13, fontWeight:600, marginTop:4 }}>{d.rating} <span style={{ color:'hsl(var(--primary))' }}>★★★★★</span></div>
                </div>
                <span style={{ width:34, height:34, borderRadius:'50%', border:'1px solid hsl(var(--border))', display:'flex', alignItems:'center', justifyContent:'center', color:'hsl(var(--foreground))' }}>↗</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && typeof document !== 'undefined' && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="doctor-modal-title"
          onClick={() => setSelected(null)}
          style={{
            position:'fixed', inset:0, zIndex:1000,
            background:'hsl(0 0% 0% / 0.55)',
            backdropFilter:'blur(6px)',
            display:'flex', alignItems:'center', justifyContent:'center',
            padding:20
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              position:'relative',
              width:'min(460px, 100%)',
              background:'hsl(var(--surface))',
              border:'1px solid hsl(var(--border))',
              borderRadius:24,
              padding:28,
              boxShadow:'0 40px 80px -30px hsl(var(--primary) / 0.6)'
            }}
          >
            <button
              onClick={() => setSelected(null)}
              aria-label="Close"
              style={{ position:'absolute', top:14, right:14, width:34, height:34, borderRadius:'50%', border:'1px solid hsl(var(--border))', background:'hsl(var(--surface))', color:'hsl(var(--foreground))', cursor:'pointer', fontSize:16, lineHeight:1, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'inherit' }}
            >×</button>

            <div style={{ display:'flex', gap:16, alignItems:'center', marginBottom:16 }}>
              <div style={{ flexShrink:0, width:84, height:84, borderRadius:'50%', overflow:'hidden', border:'2px solid hsl(var(--primary) / 0.3)' }}>
                <img src={selected.img} alt={selected.name} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
              </div>
              <div>
                <h3 id="doctor-modal-title" className="font-serif" style={{ fontWeight:700, fontSize:22, margin:0, color:'hsl(var(--foreground))' }}>{selected.name}</h3>
                <div style={{ fontSize:12.5, fontWeight:700, color:'hsl(var(--primary))', textTransform:'uppercase', letterSpacing:'.06em', marginTop:4 }}>{selected.role}</div>
                <div style={{ fontSize:13, fontWeight:600, marginTop:6 }}>{selected.rating} <span style={{ color:'hsl(var(--primary))' }}>★★★★★</span></div>
              </div>
            </div>

            {selected.description && (
              <p style={{ fontSize:14.5, lineHeight:1.6, color:'hsl(var(--muted))', margin:'0 0 20px', whiteSpace:'pre-line' }}>{selected.description}</p>
            )}

            {selected.practoUrl ? (
              <a
                href={selected.practoUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display:'inline-flex', alignItems:'center', gap:8, fontSize:14, fontWeight:700, color:'hsl(var(--primary-foreground))', background:'hsl(var(--primary))', padding:'12px 20px', borderRadius:999, textDecoration:'none', boxShadow:'0 12px 26px -10px hsl(var(--primary) / 0.7)' }}
              >
                View Practo profile <span aria-hidden>↗</span>
              </a>
            ) : (
              <span style={{ display:'inline-block', fontSize:13, color:'hsl(var(--muted))', fontStyle:'italic', padding:'12px 0' }}>Practo profile coming soon</span>
            )}
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
