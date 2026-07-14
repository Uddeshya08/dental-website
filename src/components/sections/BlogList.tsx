import { FEATURED_POST, POSTS } from '@/lib/data';

type Post = { img: string; tag: string; title: string; excerpt: string; date: string; read?: string };
type Featured = Post & { author: string };

type Props = {
  eyebrow?: string;
  heading?: string;
  body?: string;
  featured?: Featured;
  posts?: Post[];
};

export default function BlogList({
  eyebrow = 'The Journal',
  heading = 'Notes on healthier, happier smiles',
  body = 'Practical advice from our dentists — no fear-mongering, just clarity.',
  featured = { ...FEATURED_POST, read: undefined },
  posts = POSTS
}: Props) {
  return (
    <section style={{ maxWidth:1180, margin:'0 auto', padding:'48px 24px 0' }}>
      <div data-reveal style={{ textAlign:'center', maxWidth:600, margin:'0 auto 36px' }}>
        <div style={{ fontSize:13, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', color:'hsl(var(--accent))' }}>{eyebrow}</div>
        <h1 className="font-serif" style={{ fontWeight:600, fontSize:48, letterSpacing:'-.02em', margin:'10px 0 12px' }}>{heading}</h1>
        <p style={{ fontSize:17, color:'hsl(var(--muted))' }}>{body}</p>
      </div>

      <div data-reveal style={{ display:'grid', gridTemplateColumns:'1.1fr .9fr', borderRadius:26, overflow:'hidden', border:'1px solid hsl(var(--border) / 0.7)', background:'hsl(var(--surface) / 0.6)', backdropFilter:'blur(14px)', marginBottom:26 }}>
        <div style={{ minHeight:300 }}>
          <img src={featured.img} alt={featured.title} style={{ width:'100%', height:'100%', minHeight:300, objectFit:'cover', display:'block' }} />
        </div>
        <div style={{ padding:38, display:'flex', flexDirection:'column', justifyContent:'center' }}>
          <span style={{ fontSize:12, fontWeight:700, color:'hsl(var(--accent))', textTransform:'uppercase', letterSpacing:'.05em' }}>Featured · {featured.tag}</span>
          <h2 className="font-serif" style={{ fontWeight:600, fontSize:30, lineHeight:1.2, letterSpacing:'-.01em', margin:'12px 0' }}>{featured.title}</h2>
          <p style={{ fontSize:15.5, lineHeight:1.6, color:'hsl(var(--muted))', margin:'0 0 20px' }}>{featured.excerpt}</p>
          <div style={{ display:'flex', alignItems:'center', gap:12, fontSize:13, color:'hsl(var(--muted))' }}>
            <span style={{ width:30, height:30, borderRadius:'50%', background:'linear-gradient(140deg,hsl(var(--primary)),hsl(var(--accent)))' }} />{featured.author} · {featured.date}
          </div>
        </div>
      </div>

      <div data-reveal style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20, paddingBottom:12 }}>
        {posts.map((p,i) => (
          <div key={i} style={{ borderRadius:'var(--radius)', overflow:'hidden', border:'1px solid hsl(var(--border) / 0.7)', background:'hsl(var(--surface) / 0.6)', backdropFilter:'blur(14px)' }}>
            <div style={{ aspectRatio:'16/10', overflow:'hidden' }}>
              <img src={p.img} alt={p.title} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
            </div>
            <div style={{ padding:22 }}>
              <span style={{ fontSize:11.5, fontWeight:700, color:'hsl(var(--accent))', textTransform:'uppercase', letterSpacing:'.05em' }}>{p.tag}</span>
              <div className="font-serif" style={{ marginTop:8, fontWeight:600, fontSize:20, lineHeight:1.3 }}>{p.title}</div>
              <p style={{ fontSize:14, lineHeight:1.55, color:'hsl(var(--muted))', margin:'10px 0 0' }}>{p.excerpt}</p>
              <div style={{ marginTop:16, fontSize:12.5, color:'hsl(var(--muted))' }}>{p.date} · {p.read}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
