'use client';
import { useState } from 'react';
import Link from 'next/link';
import { IMG } from '@/lib/data';

type Props = {
  eyebrow?: string;
  heading?: string;
  body?: string;
  image?: string;
  ctaLabel?: string;
};

export default function BeforeAfter({
  eyebrow = 'See the difference',
  heading = 'Just a step away from a perfect smile',
  body = 'Drag the handle to reveal the transformation. Real results from our whitening & cosmetic care.',
  image = IMG.smile,
  ctaLabel = 'Start your transformation'
}: Props) {
  const [cmp, setCmp] = useState(50);
  return (
    <section data-reveal style={{ maxWidth:1180, margin:'0 auto', padding:'90px 24px 0' }}>
      <div style={{ textAlign:'center', maxWidth:640, margin:'0 auto 34px' }}>
        <div style={{ fontSize:13, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', color:'hsl(var(--accent))' }}>{eyebrow}</div>
        <h2 className="font-serif" style={{ fontWeight:600, fontSize:42, letterSpacing:'-.02em', margin:'8px 0 12px' }}>{heading}</h2>
        <p style={{ fontSize:17, color:'hsl(var(--muted))', lineHeight:1.6 }}>{body}</p>
      </div>
      <div style={{ position:'relative', maxWidth:900, margin:'0 auto', aspectRatio:'4/3', borderRadius:28, overflow:'hidden', border:'1px solid hsl(var(--border) / 0.7)', boxShadow:'0 34px 80px -34px hsl(var(--primary) / 0.5)', userSelect:'none' }}>
        <img src={image} alt="After" style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'50% 62%', filter:'brightness(1.07) saturate(1.06) contrast(1.03)' }} />
        <span style={{ position:'absolute', top:16, right:16, zIndex:3, fontSize:12, fontWeight:700, letterSpacing:'.05em', textTransform:'uppercase', color:'hsl(var(--primary-foreground))', background:'hsl(var(--primary) / 0.9)', padding:'6px 12px', borderRadius:999 }}>After</span>
        <div style={{ position:'absolute', inset:0, clipPath:`inset(0 ${100 - cmp}% 0 0)` }}>
          <img src={image} alt="Before" style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'50% 62%', filter:'sepia(.5) saturate(.82) brightness(.84) contrast(.96)' }} />
          <span style={{ position:'absolute', top:16, left:16, fontSize:12, fontWeight:700, letterSpacing:'.05em', textTransform:'uppercase', color:'hsl(var(--foreground))', background:'hsl(var(--surface) / 0.85)', padding:'6px 12px', borderRadius:999 }}>Before</span>
        </div>
        <div style={{ position:'absolute', top:0, bottom:0, left:`${cmp}%`, width:3, background:'hsl(var(--primary-foreground))', transform:'translateX(-50%)', pointerEvents:'none', zIndex:4, boxShadow:'0 0 0 1px hsl(var(--primary) / 0.35)' }}>
          <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:46, height:46, borderRadius:'50%', background:'hsl(var(--surface))', border:'2px solid hsl(var(--primary))', display:'flex', alignItems:'center', justifyContent:'center', color:'hsl(var(--primary))', fontSize:18, fontWeight:800, boxShadow:'0 10px 24px -8px hsl(var(--primary) / 0.75)' }}>⇆</div>
        </div>
        <input type="range" min={0} max={100} value={cmp} onChange={e => setCmp(Number(e.target.value))} aria-label="Reveal whitening result" style={{ position:'absolute', inset:0, width:'100%', height:'100%', margin:0, padding:0, opacity:0, cursor:'ew-resize', zIndex:5 }} />
      </div>
      <div style={{ textAlign:'center', marginTop:26 }}>
        <Link href="/book" style={{ background:'hsl(var(--primary))', color:'hsl(var(--primary-foreground))', fontWeight:700, fontSize:16, padding:'15px 30px', borderRadius:999, textDecoration:'none', boxShadow:'0 16px 32px -12px hsl(var(--primary) / 0.85)' }}>{ctaLabel}</Link>
      </div>
    </section>
  );
}
