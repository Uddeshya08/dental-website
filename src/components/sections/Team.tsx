'use client';
import { useState } from 'react';
import { DOCTORS } from '@/lib/data';

type Doctor = { name: string; role: string; img: string; rating: string };
type Props = {
  heading?: string;
  emphasis?: string;
  tabs?: string[];
  groups?: Record<string, Doctor[]>;
};

export default function Team({
  heading = 'The Help You Need When You ',
  emphasis = 'Need It',
  tabs = ['Dentist', 'Surgeon', 'Patient Support'],
  groups = DOCTORS
}: Props) {
  const [active, setActive] = useState(tabs[0]);
  const doctors = groups[active] || [];
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
          {doctors.map((d,i) => (
            <div key={i} style={{ background:'hsl(var(--surface))', border:'1px solid hsl(var(--border) / 0.7)', borderRadius:20, padding:22, display:'flex', flexDirection:'column' }}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
