import { TESTIMONIALS } from '@/lib/data';

type Props = {
  heading?: string;
  items?: { quote: string; name: string; meta: string; avatar: string }[];
};

export default function Testimonials({
  heading = 'Kind words from real patients',
  items = TESTIMONIALS
}: Props) {
  return (
    <section data-reveal style={{ maxWidth:1180, margin:'0 auto', padding:'90px 24px 0' }}>
      <h2 className="font-serif" style={{ fontWeight:600, fontSize:38, letterSpacing:'-.02em', margin:'0 0 30px', textAlign:'center' }}>{heading}</h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20 }}>
        {items.map((t,i) => (
          <div key={i} style={{ padding:28, borderRadius:'var(--radius)', background:'hsl(var(--surface) / 0.62)', backdropFilter:'blur(16px)', border:'1px solid hsl(var(--border) / 0.7)', boxShadow:'0 12px 40px -22px hsl(var(--primary) / 0.3)' }}>
            <div style={{ color:'hsl(var(--primary))', fontSize:15, letterSpacing:2 }}>★★★★★</div>
            <p className="font-serif" style={{ fontSize:18, lineHeight:1.5, color:'hsl(var(--foreground))', margin:'14px 0 20px' }}>&ldquo;{t.quote}&rdquo;</p>
            <div style={{ display:'flex', alignItems:'center', gap:12 }}>
              <img src={t.avatar} alt={t.name} style={{ width:42, height:42, borderRadius:'50%', objectFit:'cover', border:'2px solid hsl(var(--surface))' }} />
              <div>
                <div style={{ fontWeight:700, fontSize:14 }}>{t.name}</div>
                <div style={{ fontSize:12.5, color:'hsl(var(--muted))' }}>{t.meta}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
