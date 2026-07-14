import Link from 'next/link';

export default function FloatingBookBtn() {
  return (
    <Link href="/book" style={{ position:'fixed', bottom:22, right:22, zIndex:60, background:'hsl(var(--primary))', color:'hsl(var(--primary-foreground))', fontFamily:'Plus Jakarta Sans, sans-serif', fontWeight:700, fontSize:15, padding:'15px 24px', borderRadius:999, textDecoration:'none', boxShadow:'0 16px 40px -12px hsl(var(--primary) / 0.9)' }}>
      Book Appointment
    </Link>
  );
}
