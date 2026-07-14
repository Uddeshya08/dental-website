import { ABOUT_COLS, CLINIC } from '@/lib/data';

type Props = {
  eyebrow?: string;
  heading?: string;
  body?: string;
  cols?: { n: string; title: string; body: string; icon: string }[];
};

export default function AboutNumbered({
  eyebrow = `About ${CLINIC.brand}`,
  heading = 'From Routine Checkups To Full Smile Makeovers — We’re With You',
  body = 'Our practice has been recently refurbished with cutting-edge equipment in a refreshed and contemporary space. The practice has been transformed but retains its friendly, family-focused and professional service.',
  cols = ABOUT_COLS
}: Props) {
  return (
    <section data-reveal style={{ width:'100%', padding:'84px 24px', background:'radial-gradient(900px 520px at 28% 12%, hsl(var(--primary) / 0.78), transparent 72%), hsl(var(--primary))', color:'hsl(var(--primary-foreground))' }}>
      <div style={{ maxWidth:1180, margin:'0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'.5fr 1.5fr', gap:32, alignItems:'start' }}>
          <div style={{ fontSize:14, fontWeight:600, opacity:.85 }}>{eyebrow}</div>
          <div>
            <h2 className="font-serif" style={{ fontWeight:600, fontSize:46, lineHeight:1.08, letterSpacing:'-.02em', margin:0 }}>{heading} <span style={{ fontStyle:'italic' }}>Every Step.</span></h2>
            <p style={{ fontSize:16, lineHeight:1.65, opacity:.82, maxWidth:'34em', margin:'22px 0 0' }}>{body}</p>
          </div>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', marginTop:60, borderTop:'1px solid hsl(var(--primary-foreground) / 0.28)' }}>
          {cols.map((c,i) => (
            <div key={i} style={{ padding:'34px 26px', borderLeft:'1px solid hsl(var(--primary-foreground) / 0.16)', display:'flex', flexDirection:'column' }}>
              <div style={{ display:'flex', gap:20, alignItems:'flex-start' }}>
                <span className="font-serif" style={{ fontSize:22, opacity:.9 }}>{c.n}</span>
                <div>
                  <div className="font-serif" style={{ fontWeight:600, fontSize:22, marginBottom:12 }}>{c.title}</div>
                  <div style={{ width:38, height:1, background:'hsl(var(--primary-foreground) / 0.45)', marginBottom:14 }} />
                  <div style={{ fontSize:13.5, lineHeight:1.6, opacity:.8 }}>{c.body}</div>
                </div>
              </div>
              <div style={{ fontSize:46, lineHeight:1, marginTop:26, opacity:.95 }}>{c.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
