import { TRUST } from '@/lib/data';

type Props = { items?: { mark: string; label: string }[] };

export default function TrustBar({ items = TRUST }: Props) {
  return (
    <section data-reveal style={{ maxWidth:1180, margin:'24px auto 0', padding:'0 24px' }}>
      <div style={{ display:'flex', flexWrap:'wrap', gap:14, justifyContent:'space-between', padding:'18px 24px', borderRadius:'var(--radius)', background:'hsl(var(--surface) / 0.6)', backdropFilter:'blur(16px)', border:'1px solid hsl(var(--border) / 0.7)' }}>
        {items.map((t,i) => (
          <div key={i} style={{ display:'flex', alignItems:'center', gap:10 }}>
            <span style={{ width:30, height:30, borderRadius:9, background:'hsl(var(--primary) / 0.12)', color:'hsl(var(--primary))', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:800, fontSize:14 }}>{t.mark}</span>
            <span style={{ fontWeight:600, fontSize:14, color:'hsl(var(--foreground))' }}>{t.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
