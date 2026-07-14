import { HOURS } from '@/lib/data';

type Props = {
  eyebrow?: string;
  marqueeText?: string;
  cutoutImage?: string;
  items?: { days: string; time: string }[];
};

export default function Hours({
  eyebrow = 'Visit Us · We’re open all week',
  marqueeText = 'We Are Open',
  cutoutImage = '/open-cutout.png',
  items = HOURS
}: Props) {
  const marquee = `${marqueeText}  •  `.repeat(4);
  return (
    <section data-reveal style={{ width:'100%', margin:'96px 0 0', padding:'0 24px' }}>
      <div style={{ maxWidth:1180, margin:'0 auto' }}>
        <div style={{ position:'relative', borderRadius:30, overflow:'hidden', background:'radial-gradient(760px 460px at 50% 10%, hsl(var(--primary) / 0.92), hsl(var(--primary)))', height:'clamp(440px, 52vw, 540px)' }}>
          <div style={{ position:'absolute', top:30, left:0, right:0, zIndex:3, textAlign:'center', fontSize:13, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'hsl(var(--primary-foreground) / 0.82)' }}>{eyebrow}</div>
          <div style={{ position:'absolute', top:0, bottom:0, left:0, right:0, zIndex:0, display:'flex', alignItems:'center', overflow:'hidden', pointerEvents:'none' }}>
            <div style={{ display:'flex', flex:'none', width:'max-content', whiteSpace:'nowrap', animation:'dz-marquee 26s linear infinite', willChange:'transform' }}>
              <span style={{ fontWeight:800, fontSize:'clamp(76px,13vw,176px)', lineHeight:1, letterSpacing:'-.03em', color:'hsl(var(--primary-foreground) / 0.92)', paddingRight:60 }}>{marquee}</span>
              <span aria-hidden style={{ fontWeight:800, fontSize:'clamp(76px,13vw,176px)', lineHeight:1, letterSpacing:'-.03em', color:'hsl(var(--primary-foreground) / 0.92)', paddingRight:60 }}>{marquee}</span>
            </div>
          </div>
          <img src={cutoutImage} alt="Smiling patient" style={{ position:'absolute', bottom:0, left:'50%', transform:'translateX(-50%)', height:'clamp(400px, 50vw, 500px)', width:'auto', zIndex:2, pointerEvents:'none', filter:'drop-shadow(0 24px 40px hsl(0 0% 0% / 0.28))' }} />
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16, maxWidth:920, margin:'-46px auto 0', position:'relative', zIndex:2 }}>
          {items.map((h,i) => (
            <div key={i} style={{ textAlign:'center', padding:22, borderRadius:18, background:'hsl(var(--surface) / 0.82)', backdropFilter:'blur(16px)', border:'1px solid hsl(var(--border) / 0.7)', boxShadow:'0 16px 40px -20px hsl(var(--primary) / 0.45)' }}>
              <div style={{ fontWeight:700, fontSize:16, color:'hsl(var(--foreground))' }}>{h.days}</div>
              <div style={{ fontSize:14, color:'hsl(var(--muted))', marginTop:6 }}>{h.time}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
