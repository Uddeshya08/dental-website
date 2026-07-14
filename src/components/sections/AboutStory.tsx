import { ABOUT_STATS, VALUES, TEAM, IMG } from '@/lib/data';

type Props = {
  eyebrow?: string;
  heading?: string;
  body?: string;
  founderImage?: string;
  stats?: { value: string; label: string }[];
  values?: { mark: string; title: string; body: string }[];
  team?: { name: string; role: string; img: string }[];
};

export default function AboutStory({
  eyebrow = 'About Dentheal',
  heading = 'We started Dentheal to make going to the dentist feel human again.',
  body = 'No rushing, no jargon, no upsell. Just a warm room, honest advice, and a team that treats you like a person — not a set of teeth. Over a decade later, that’s still the whole philosophy.',
  founderImage = IMG.dentistF,
  stats = ABOUT_STATS,
  values = VALUES,
  team = TEAM
}: Props) {
  return (
    <div style={{ maxWidth:1180, margin:'0 auto', padding:'48px 24px 0' }}>
      <div data-reveal style={{ display:'grid', gridTemplateColumns:'1.1fr .9fr', gap:44, alignItems:'center' }}>
        <div>
          <div style={{ fontSize:13, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', color:'hsl(var(--accent))' }}>{eyebrow}</div>
          <h1 className="font-serif" style={{ fontWeight:600, fontSize:50, lineHeight:1.05, letterSpacing:'-.02em', margin:'12px 0 20px' }}>{heading}</h1>
          <p style={{ fontSize:17, lineHeight:1.65, color:'hsl(var(--muted))' }}>{body}</p>
        </div>
        <div style={{ aspectRatio:'4/5', borderRadius:26, overflow:'hidden', border:'1px solid hsl(var(--border) / 0.7)', boxShadow:'0 30px 60px -30px hsl(var(--primary) / 0.35)' }}>
          <img src={founderImage} alt="Dentheal founder" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
        </div>
      </div>

      <div data-reveal style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:18, marginTop:48 }}>
        {stats.map((s,i) => (
          <div key={i} style={{ padding:26, borderRadius:'var(--radius)', background:'hsl(var(--surface) / 0.6)', backdropFilter:'blur(14px)', border:'1px solid hsl(var(--border) / 0.7)', textAlign:'center' }}>
            <div className="font-serif" style={{ fontWeight:600, fontSize:38, color:'hsl(var(--primary))' }}>{s.value}</div>
            <div style={{ fontSize:13.5, color:'hsl(var(--muted))', fontWeight:500, marginTop:4 }}>{s.label}</div>
          </div>
        ))}
      </div>

      <h2 data-reveal className="font-serif" style={{ fontWeight:600, fontSize:34, letterSpacing:'-.02em', margin:'70px 0 26px', textAlign:'center' }}>What we stand for</h2>
      <div data-reveal style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20 }}>
        {values.map((v,i) => (
          <div key={i} style={{ padding:28, borderRadius:'var(--radius)', background:'hsl(var(--surface) / 0.6)', backdropFilter:'blur(14px)', border:'1px solid hsl(var(--border) / 0.7)' }}>
            <span style={{ display:'flex', width:44, height:44, borderRadius:13, alignItems:'center', justifyContent:'center', background:'hsl(var(--primary) / 0.12)', color:'hsl(var(--primary))', fontWeight:800, fontSize:18 }}>{v.mark}</span>
            <div className="font-serif" style={{ marginTop:16, fontWeight:600, fontSize:20 }}>{v.title}</div>
            <div style={{ marginTop:8, fontSize:14.5, lineHeight:1.55, color:'hsl(var(--muted))' }}>{v.body}</div>
          </div>
        ))}
      </div>

      <h2 data-reveal className="font-serif" style={{ fontWeight:600, fontSize:34, letterSpacing:'-.02em', margin:'70px 0 26px', textAlign:'center' }}>Meet the team</h2>
      <div data-reveal style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:20, paddingBottom:12 }}>
        {team.map((m,i) => (
          <div key={i} style={{ textAlign:'center' }}>
            <div style={{ aspectRatio:'1/1', borderRadius:20, overflow:'hidden', border:'1px solid hsl(var(--border) / 0.7)', marginBottom:12 }}>
              <img src={m.img} alt={m.name} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
            </div>
            <div className="font-serif" style={{ fontWeight:600, fontSize:18 }}>{m.name}</div>
            <div style={{ fontSize:13, color:'hsl(var(--muted))' }}>{m.role}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
