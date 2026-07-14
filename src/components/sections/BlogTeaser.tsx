import Link from 'next/link';
import { POSTS_TEASE } from '@/lib/data';

type Props = {
  heading?: string;
  items?: { img: string; tag: string; title: string }[];
};

export default function BlogTeaser({ heading = 'From the journal', items = POSTS_TEASE }: Props) {
  return (
    <section data-reveal style={{ maxWidth:1180, margin:'0 auto', padding:'90px 24px 0' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:28 }}>
        <h2 className="font-serif" style={{ fontWeight:600, fontSize:38, letterSpacing:'-.02em', margin:0 }}>{heading}</h2>
        <Link href="/blog" style={{ border:'1px solid hsl(var(--border))', background:'hsl(var(--surface) / 0.6)', color:'hsl(var(--foreground))', fontWeight:600, fontSize:14, padding:'11px 18px', borderRadius:999, textDecoration:'none' }}>Read the blog →</Link>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20 }}>
        {items.map((p,i) => (
          <Link key={i} href="/blog" style={{ textDecoration:'none', display:'block', color:'inherit' }}>
            <div style={{ aspectRatio:'16/10', borderRadius:18, overflow:'hidden', border:'1px solid hsl(var(--border) / 0.7)' }}>
              <img src={p.img} alt={p.title} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
            </div>
            <div style={{ marginTop:14, fontSize:12, fontWeight:700, color:'hsl(var(--accent))', textTransform:'uppercase', letterSpacing:'.05em' }}>{p.tag}</div>
            <div className="font-serif" style={{ marginTop:6, fontWeight:600, fontSize:19, lineHeight:1.3, color:'hsl(var(--foreground))' }}>{p.title}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
