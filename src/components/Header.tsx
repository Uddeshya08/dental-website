'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NAV, CLINIC } from '@/lib/data';

export default function Header() {
  const pathname = usePathname();
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const saved = (typeof window !== 'undefined' && localStorage.getItem('mode')) as 'light' | 'dark' | null;
    if (saved) { setMode(saved); document.documentElement.setAttribute('data-mode', saved); }
    const mq = window.matchMedia('(max-width: 640px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const toggleMode = () => {
    const next = mode === 'dark' ? 'light' : 'dark';
    setMode(next);
    document.documentElement.setAttribute('data-mode', next);
    localStorage.setItem('mode', next);
  };

  return (
    <>
      <header style={{ position:'sticky', top:0, zIndex:50, padding:'12px 14px', display:'flex', justifyContent:'center' }}>
        <div style={{ width:'100%', maxWidth:1180, display:'flex', alignItems:'center', gap:12, padding:'10px 12px 10px 16px', borderRadius:999, background:'hsl(var(--surface) / 0.66)', backdropFilter:'blur(18px) saturate(1.4)', WebkitBackdropFilter:'blur(18px) saturate(1.4)', border:'1px solid hsl(var(--border) / 0.7)', boxShadow:'0 10px 40px -14px hsl(var(--primary) / 0.28)' }}>
          <Link href="/" style={{ display:'flex', alignItems:'center', gap:10, textDecoration:'none', flexShrink:0 }}>
            <span style={{ width:32, height:32, borderRadius:11, background:'linear-gradient(140deg, hsl(var(--primary)), hsl(var(--accent)))', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 6px 16px -6px hsl(var(--primary) / 0.7)' }}>
              <span style={{ width:12, height:12, borderRadius:'4px 8px 4px 8px', background:'hsl(var(--primary-foreground))' }} />
            </span>
            <span className="font-serif" style={{ fontWeight:600, fontSize:20, letterSpacing:'-.01em', color:'hsl(var(--foreground))' }}>{CLINIC.brand}</span>
          </Link>

          <nav style={{ display:'flex', gap:4, marginLeft:8 }}>
            {NAV.map(item => {
              const active = pathname === item.href;
              return (
                <Link key={item.href} href={item.href} style={{ textDecoration:'none', background: active ? 'hsl(var(--primary) / 0.12)' : 'transparent', color: active ? 'hsl(var(--primary))' : 'hsl(var(--muted))', fontWeight:600, fontSize:14, padding:'9px 15px', borderRadius:999 }}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div style={{ flex:1 }} />

          {!isMobile && (
            <button onClick={toggleMode} title="Toggle light / dark" style={{ width:32, height:28, borderRadius:999, border:'1px solid hsl(var(--border))', cursor:'pointer', background:'hsl(var(--surface))', display:'flex', alignItems:'center', justifyContent:'center', color:'hsl(var(--foreground))', fontSize:13 }}>
              {mode === 'dark' ? '☾' : '☀'}
            </button>
          )}

          {!isMobile && (
            <Link href="/book" style={{ textDecoration:'none', background:'hsl(var(--primary))', color:'hsl(var(--primary-foreground))', fontWeight:700, fontSize:14, padding:'11px 18px', borderRadius:999, boxShadow:'0 10px 26px -10px hsl(var(--primary) / 0.8)', whiteSpace:'nowrap' }}>
              Book
            </Link>
          )}

          {isMobile && (
            <button aria-label="Menu" onClick={() => setMenuOpen(v => !v)} style={{ width:40, height:40, borderRadius:999, border:'1px solid hsl(var(--border))', background:'hsl(var(--surface))', cursor:'pointer', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:4, padding:0 }}>
              <span style={{ width:16, height:2, background:'hsl(var(--foreground))', borderRadius:2, transition:'transform .2s', transform: menuOpen ? 'translateY(3px) rotate(45deg)' : 'none' }} />
              <span style={{ width:16, height:2, background:'hsl(var(--foreground))', borderRadius:2, opacity: menuOpen ? 0 : 1, transition:'opacity .2s' }} />
              <span style={{ width:16, height:2, background:'hsl(var(--foreground))', borderRadius:2, transition:'transform .2s', transform: menuOpen ? 'translateY(-3px) rotate(-45deg)' : 'none' }} />
            </button>
          )}
        </div>
      </header>

      {isMobile && menuOpen && (
        <div style={{ position:'fixed', top:76, left:14, right:14, zIndex:49, padding:16, borderRadius:20, background:'hsl(var(--surface) / 0.96)', backdropFilter:'blur(18px)', border:'1px solid hsl(var(--border))', boxShadow:'0 20px 50px -20px hsl(var(--primary) / 0.4)', display:'flex', flexDirection:'column', gap:4 }}>
          {NAV.map(item => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} style={{ textDecoration:'none', background: active ? 'hsl(var(--primary) / 0.12)' : 'transparent', color: active ? 'hsl(var(--primary))' : 'hsl(var(--foreground))', fontWeight:600, fontSize:16, padding:'12px 16px', borderRadius:12 }}>
                {item.label}
              </Link>
            );
          })}
          <div style={{ height:1, background:'hsl(var(--border))', margin:'8px 0' }} />
          <button onClick={toggleMode} style={{ textAlign:'left', border:'none', background:'transparent', color:'hsl(var(--foreground))', fontWeight:600, fontSize:15, padding:'12px 16px', borderRadius:12, cursor:'pointer', fontFamily:'inherit' }}>
            {mode === 'dark' ? '☾ Dark mode' : '☀ Light mode'}
          </button>
          <Link href="/book" style={{ marginTop:4, textAlign:'center', textDecoration:'none', background:'hsl(var(--primary))', color:'hsl(var(--primary-foreground))', fontWeight:700, fontSize:15, padding:'14px 20px', borderRadius:12 }}>
            Book Appointment
          </Link>
        </div>
      )}
    </>
  );
}
