import { CLINIC } from '@/lib/data';
import FooterForm from './FooterForm';

export default function Footer() {
  return (
    <footer style={{ position:'relative', zIndex:1, marginTop:96, background:'hsl(var(--ink))', color:'hsl(var(--ink-foreground))' }}>
      <div style={{ maxWidth:1180, margin:'0 auto', padding:'72px 24px 34px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:52, alignItems:'start' }}>
        <div>
          <h2 className="font-serif" style={{ fontWeight:600, fontSize:46, lineHeight:1.08, letterSpacing:'-.02em', margin:0 }}>Let&apos;s Make That Smile Shine!</h2>
          <div style={{ marginTop:38 }}>
            <div style={{ fontWeight:700, fontSize:15, marginBottom:12 }}>Contact Us</div>
            <div style={{ fontSize:14, lineHeight:1.7, opacity:.72 }}>{CLINIC.address1}<br/>{CLINIC.address2}</div>
            <div style={{ fontSize:14, lineHeight:1.7, opacity:.72, marginTop:12 }}>
              <a href={`tel:${CLINIC.phoneRaw}`} style={{ color:'inherit', textDecoration:'none' }}>{CLINIC.phone}</a><br/>
              <a href={`mailto:${CLINIC.email}`} style={{ color:'inherit', textDecoration:'none' }}>{CLINIC.email}</a>
            </div>
          </div>
          <div style={{ marginTop:46 }}>
            <img src="/dentheal-logo.jpeg" alt={`${CLINIC.brand} logo`} style={{ height:'clamp(90px, 18vw, 160px)', width:'auto', display:'block' }} />
          </div>
        </div>

        <div style={{ background:'hsl(var(--ink-foreground) / 0.05)', border:'1px solid hsl(var(--ink-foreground) / 0.12)', borderRadius:24, padding:32 }}>
          <FooterForm />
        </div>
      </div>
      <div style={{ maxWidth:1180, margin:'0 auto', padding:'20px 24px', borderTop:'1px solid hsl(var(--ink-foreground) / 0.12)', display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:12, alignItems:'center' }}>
        <div style={{ display:'flex', alignItems:'center', gap:14, fontSize:13, opacity:.8 }}>
          <span style={{ fontWeight:700, opacity:1 }}>Follow Us:</span><span>Facebook</span><span style={{ opacity:.5 }}>·</span><span>LinkedIn</span><span style={{ opacity:.5 }}>·</span><span>Instagram</span>
        </div>
        <span style={{ fontSize:13, opacity:.6 }}>© {new Date().getFullYear()} {CLINIC.brand} Dental. All rights reserved.</span>
      </div>
    </footer>
  );
}
