import { JOURNEY } from '@/lib/data';

type Props = {
  heading?: string;
  body?: string;
  steps?: { n: string; title: string; body: string }[];
};

export default function Journey({
  heading = 'From Consultation to Care — A Simpler Smile Journey.',
  body = 'From your first visit to your final treatment, we make every step easy, comfortable, and focused on you. Experience expert dental care designed to fit your needs and lifestyle.',
  steps = JOURNEY
}: Props) {
  return (
    <section data-reveal style={{ width:'100%', padding:'84px 24px', background:'hsl(var(--ink))', color:'hsl(var(--ink-foreground))' }}>
      <div style={{ maxWidth:1180, margin:'0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1.3fr .7fr', gap:36, alignItems:'start' }}>
          <h2 className="font-serif" style={{ fontWeight:600, fontSize:44, lineHeight:1.1, letterSpacing:'-.02em', margin:0 }}>{heading}</h2>
          <p style={{ fontSize:14.5, lineHeight:1.65, opacity:.7, margin:'8px 0 0' }}>{body}</p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:24, marginTop:68 }}>
          {steps.map((j,i) => (
            <div key={i} style={{ position:'relative' }}>
              <div style={{ display:'flex', alignItems:'center', marginBottom:22 }}>
                <span className="font-serif" style={{ width:52, height:52, borderRadius:'50%', border:'1px solid hsl(var(--ink-foreground) / 0.45)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, flex:'none' }}>{j.n}</span>
                <span style={{ flex:1, height:1, background:'hsl(var(--ink-foreground) / 0.22)' }} />
              </div>
              <div className="font-serif" style={{ fontWeight:600, fontSize:20, marginBottom:10 }}>{j.title}</div>
              <div style={{ fontSize:13.5, lineHeight:1.6, opacity:.68 }}>{j.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
