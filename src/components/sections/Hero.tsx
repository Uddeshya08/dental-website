import Link from 'next/link';
import { HERO_STATS, IMG } from '@/lib/data';

type Props = {
  eyebrow?: string;
  title?: string;
  emphasis?: string;
  body?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  image?: string;
  videoSrc?: string;
  posterSrc?: string;
  stats?: { value: string; label: string }[];
};

export default function Hero({
  eyebrow = 'Accepting new patients',
  title = 'Dentistry that feels ',
  emphasis = 'calm',
  body = 'Modern care, gentle hands, and a team that explains everything. Dentheal makes every visit feel less like a chore and more like a reset.',
  ctaPrimary = 'Book your visit',
  ctaSecondary = 'Explore services',
  image = IMG.smile,
  videoSrc = '/videos/hero.mp4',
  posterSrc = IMG.smile,
  stats = HERO_STATS
}: Props) {
  return (
    <section data-reveal style={{ maxWidth:1180, margin:'0 auto', padding:'56px 24px 40px', display:'grid', gridTemplateColumns:'1.05fr .95fr', gap:48, alignItems:'center' }}>
      <div>
        <span style={{ display:'inline-flex', alignItems:'center', gap:8, fontSize:13, fontWeight:600, color:'hsl(var(--primary))', background:'hsl(var(--primary) / 0.1)', padding:'7px 14px', borderRadius:999, border:'1px solid hsl(var(--primary) / 0.2)' }}>
          <span style={{ width:7, height:7, borderRadius:'50%', background:'hsl(var(--success))' }} />{eyebrow}
        </span>
        <h1 className="font-serif" style={{ fontWeight:600, fontSize:60, lineHeight:1.04, letterSpacing:'-.02em', margin:'20px 0 0', textWrap:'balance' as never }}>
          {title}<span style={{ fontStyle:'italic', color:'hsl(var(--primary))' }}>{emphasis}</span>, clear &amp; genuinely kind.
        </h1>
        <p style={{ fontSize:18, lineHeight:1.6, color:'hsl(var(--muted))', margin:'22px 0 0', maxWidth:'30em' }}>{body}</p>
        <div style={{ display:'flex', gap:14, marginTop:32, flexWrap:'wrap' }}>
          <Link href="/book" style={{ background:'hsl(var(--primary))', color:'hsl(var(--primary-foreground))', fontWeight:700, fontSize:16, padding:'16px 28px', borderRadius:999, textDecoration:'none', boxShadow:'0 14px 30px -12px hsl(var(--primary) / 0.85)' }}>{ctaPrimary}</Link>
          <Link href="/services" style={{ border:'1px solid hsl(var(--border))', background:'hsl(var(--surface) / 0.6)', color:'hsl(var(--foreground))', fontWeight:600, fontSize:16, padding:'16px 26px', borderRadius:999, textDecoration:'none' }}>{ctaSecondary}</Link>
        </div>
        <div style={{ display:'flex', gap:26, marginTop:40, flexWrap:'wrap' }}>
          {stats.map((s,i) => (
            <div key={i}>
              <div className="font-serif" style={{ fontWeight:600, fontSize:30, color:'hsl(var(--foreground))' }}>{s.value}</div>
              <div style={{ fontSize:13, color:'hsl(var(--muted))', fontWeight:500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ position:'relative' }}>
        <div style={{ position:'relative', borderRadius:28, overflow:'hidden', aspectRatio:'4/5', border:'1px solid hsl(var(--border) / 0.7)', boxShadow:'0 30px 70px -30px hsl(var(--primary) / 0.4)' }}>
          {videoSrc ? (
            <video
              src={videoSrc}
              poster={posterSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Dental care demonstration"
              style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }}
            />
          ) : (
            <img src={image} alt="Patient with a bright, healthy smile" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
          )}
        </div>
        <div style={{ position:'absolute', bottom:-22, left:-22, padding:'16px 18px', borderRadius:18, background:'hsl(var(--surface) / 0.75)', backdropFilter:'blur(18px)', border:'1px solid hsl(var(--border) / 0.7)', boxShadow:'0 18px 40px -18px hsl(var(--primary) / 0.4)', display:'flex', alignItems:'center', gap:12 }}>
          <span style={{ width:34, height:34, borderRadius:'50%', background:'linear-gradient(140deg,hsl(var(--primary)),hsl(var(--accent)))', border:'2px solid hsl(var(--surface))' }} />
          <div>
            <div style={{ fontWeight:700, fontSize:15 }}>4.9 ★ · 1,200+ reviews</div>
            <div style={{ fontSize:12, color:'hsl(var(--muted))' }}>Loved by our community</div>
          </div>
        </div>
      </div>
    </section>
  );
}
