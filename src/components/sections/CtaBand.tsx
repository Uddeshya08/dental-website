import Link from 'next/link';

type Props = {
  heading?: string;
  body?: string;
  ctaLabel?: string;
};

export default function CtaBand({
  heading = "Ready for a dentist you'll actually look forward to?",
  body = 'Same-week appointments available. It only takes a minute.',
  ctaLabel = 'Book Appointment'
}: Props) {
  return (
    <section data-reveal style={{ maxWidth:1180, margin:'88px auto 0', padding:'0 24px' }}>
      <div style={{ position:'relative', overflow:'hidden', borderRadius:30, padding:'56px 48px', background:'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))', color:'hsl(var(--primary-foreground))', display:'flex', justifyContent:'space-between', alignItems:'center', gap:24, flexWrap:'wrap', boxShadow:'0 30px 70px -30px hsl(var(--primary) / 0.7)' }}>
        <div style={{ position:'absolute', top:-60, right:-40, width:260, height:260, borderRadius:'50%', background:'hsl(0 0% 100% / 0.12)' }} />
        <div style={{ position:'relative' }}>
          <h2 className="font-serif" style={{ fontWeight:600, fontSize:38, letterSpacing:'-.02em', margin:0, maxWidth:'16em' }}>{heading}</h2>
          <p style={{ margin:'12px 0 0', fontSize:17, opacity:.9 }}>{body}</p>
        </div>
        <Link href="/book" style={{ position:'relative', background:'hsl(var(--primary-foreground))', color:'hsl(var(--primary))', fontWeight:800, fontSize:16, padding:'17px 30px', borderRadius:999, textDecoration:'none', boxShadow:'0 16px 30px -14px rgba(0,0,0,.4)' }}>{ctaLabel}</Link>
      </div>
    </section>
  );
}
