'use client';
import { useState } from 'react';
import Link from 'next/link';
import { SERVICES, type Service } from '@/lib/data';

type Props = {
  eyebrow?: string;
  heading?: string;
  body?: string;
  services?: Service[];
};

const FILTERS = ['All','Preventive','Cosmetic','Restorative','Specialty'];

export default function ServicesGrid({
  eyebrow = 'Services',
  heading = 'Everything your smile needs, in one place',
  body = 'From routine cleanings to full smile makeovers — reachable in two clicks. Filter to find your care.',
  services = SERVICES
}: Props) {
  const [filter, setFilter] = useState('All');
  const list = services.filter(s => filter === 'All' || s.category === filter);
  return (
    <section style={{ maxWidth:1180, margin:'0 auto', padding:'48px 24px 0' }}>
      <div data-reveal style={{ textAlign:'center', maxWidth:640, margin:'0 auto' }}>
        <div style={{ fontSize:13, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', color:'hsl(var(--accent))' }}>{eyebrow}</div>
        <h1 className="font-serif" style={{ fontWeight:600, fontSize:48, letterSpacing:'-.02em', margin:'10px 0 14px' }}>{heading}</h1>
        <p style={{ fontSize:17, color:'hsl(var(--muted))', lineHeight:1.6 }}>{body}</p>
      </div>

      <div data-reveal style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap', margin:'34px 0 30px' }}>
        {FILTERS.map(f => {
          const on = filter === f;
          return (
            <button key={f} onClick={() => setFilter(f)} style={{ border:`1px solid ${on ? 'hsl(var(--primary))' : 'hsl(var(--border))'}`, background: on ? 'hsl(var(--primary))' : 'hsl(var(--surface) / 0.6)', color: on ? 'hsl(var(--primary-foreground))' : 'hsl(var(--foreground))', fontWeight:600, fontSize:14, padding:'10px 18px', borderRadius:999, cursor:'pointer', fontFamily:'inherit' }}>{f}</button>
          );
        })}
      </div>

      <div data-reveal style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:22, paddingBottom:20 }}>
        {list.map(s => (
          <div key={s.slug} style={{ display:'flex', flexDirection:'column', overflow:'hidden', borderRadius:'var(--radius)', background:'hsl(var(--surface) / 0.62)', backdropFilter:'blur(16px)', border:'1px solid hsl(var(--border) / 0.7)', boxShadow:'0 12px 40px -22px hsl(var(--primary) / 0.3)' }}>
            <div style={{ position:'relative', height:172 }}>
              <img src={s.image} alt={s.name} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block', clipPath:'polygon(0 0,100% 0,100% 86%,0 100%)' }} />
              <span style={{ position:'absolute', left:24, bottom:-24, width:54, height:54, borderRadius:17, background:'hsl(var(--surface) / 0.82)', backdropFilter:'blur(12px)', border:'1px solid hsl(var(--border))', display:'flex', alignItems:'center', justifyContent:'center', color:'hsl(var(--primary))', fontSize:23, boxShadow:'0 12px 26px -10px hsl(var(--primary) / 0.6)' }}>{s.icon}</span>
              <span style={{ position:'absolute', top:14, right:14, fontSize:11.5, fontWeight:700, color:'hsl(var(--primary-foreground))', background:'hsl(var(--accent) / 0.92)', padding:'5px 11px', borderRadius:999 }}>{s.category}</span>
            </div>
            <div style={{ display:'flex', flexDirection:'column', flex:1, padding:'34px 26px 26px' }}>
              <div className="font-serif" style={{ fontWeight:600, fontSize:22 }}>{s.name}</div>
              <div style={{ marginTop:8, fontSize:14.5, lineHeight:1.55, color:'hsl(var(--muted))', flex:1 }}>{s.blurb}</div>
              <ul style={{ listStyle:'none', padding:0, margin:'16px 0 0', display:'flex', flexDirection:'column', gap:7 }}>
                {s.points.map((pt,i) => (
                  <li key={i} style={{ display:'flex', gap:9, alignItems:'center', fontSize:13.5, color:'hsl(var(--foreground))' }}>
                    <span style={{ width:16, height:16, borderRadius:'50%', background:'hsl(var(--success) / 0.16)', color:'hsl(var(--success))', display:'flex', alignItems:'center', justifyContent:'center', fontSize:10, fontWeight:800 }}>✓</span>{pt}
                  </li>
                ))}
              </ul>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:20, paddingTop:18, borderTop:'1px solid hsl(var(--border) / 0.7)' }}>
                <span style={{ fontSize:13, color:'hsl(var(--muted))' }}>{s.price}</span>
                <Link href={`/book?service=${s.slug}`} style={{ background:'hsl(var(--primary))', color:'hsl(var(--primary-foreground))', fontWeight:700, fontSize:13.5, padding:'9px 16px', borderRadius:999, textDecoration:'none' }}>Book</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
