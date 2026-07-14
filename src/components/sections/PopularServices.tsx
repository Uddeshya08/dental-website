import Link from 'next/link';
import { POPULAR } from '@/lib/data';

type Props = {
  heading?: string;
  emphasis?: string;
  items?: { name: string; image: string; price: string; category: string; slug: string }[];
};

export default function PopularServices({
  heading = 'The Most Popular ',
  emphasis = 'Service',
  items = POPULAR
}: Props) {
  return (
    <section data-reveal style={{ width:'100%', margin:'64px 0 0', padding:'66px 24px', background:'linear-gradient(180deg, hsl(var(--accent) / 0.13), hsl(var(--accent) / 0.05))' }}>
      <div style={{ maxWidth:1180, margin:'0 auto' }}>
        <h2 className="font-serif" style={{ fontWeight:600, fontSize:44, lineHeight:1.12, letterSpacing:'-.02em', textAlign:'center', margin:'0 0 42px' }}>
          {heading}<span style={{ fontStyle:'italic', color:'hsl(var(--primary))' }}>{emphasis}</span> We Provide
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:20 }}>
          {items.map((p,i) => (
            <Link key={i} href={`/book?service=${p.slug}`} style={{ position:'relative', aspectRatio:'3/4', borderRadius:22, overflow:'hidden', textDecoration:'none', boxShadow:'0 18px 44px -22px hsl(var(--primary) / 0.5)', display:'block' }}>
              <img src={p.image} alt={p.name} style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover' }} />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, hsl(0 0% 0% / 0.5) 0%, transparent 32%, transparent 50%, hsl(0 0% 0% / 0.8) 100%)' }} />
              <div style={{ position:'absolute', top:16, left:18, right:16, display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:8 }}>
                <span className="font-serif" style={{ fontWeight:600, fontSize:19, lineHeight:1.2, color:'#fff' }}>{p.name}</span>
                <span style={{ width:30, height:30, borderRadius:'50%', background:'hsl(0 0% 100% / 0.22)', backdropFilter:'blur(6px)', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:15 }}>↗</span>
              </div>
              <div style={{ position:'absolute', bottom:16, left:18, right:18, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <span style={{ fontSize:13, fontWeight:600, color:'#fff' }}>{p.price}</span>
                <span style={{ fontSize:12, fontWeight:600, color:'hsl(0 0% 100% / 0.82)' }}>{p.category}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
