'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NAV, CLINIC } from '@/lib/data';

export default function Header() {
  const pathname = usePathname();
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const saved = (typeof window !== 'undefined' && localStorage.getItem('mode')) as 'light' | 'dark' | null;
    if (saved) { setMode(saved); document.documentElement.setAttribute('data-mode', saved); }
  }, []);

  const toggleMode = () => {
    const next = mode === 'dark' ? 'light' : 'dark';
    setMode(next);
    document.documentElement.setAttribute('data-mode', next);
    localStorage.setItem('mode', next);
  };

  return (
    <header style={{ position:'sticky', top:0, zIndex:50, padding:'14px 20px', display:'flex', justifyContent:'center' }}>
      <div style={{ width:'100%', maxWidth:1180, display:'flex', alignItems:'center', gap:18, padding:'10px 14px 10px 18px', borderRadius:999, background:'hsl(var(--surface) / 0.66)', backdropFilter:'blur(18px) saturate(1.4)', WebkitBackdropFilter:'blur(18px) saturate(1.4)', border:'1px solid hsl(var(--border) / 0.7)', boxShadow:'0 10px 40px -14px hsl(var(--primary) / 0.28)' }}>
        <Link href="/" style={{ display:'flex', alignItems:'center', gap:10, textDecoration:'none' }}>
          <span style={{ width:34, height:34, borderRadius:11, background:'linear-gradient(140deg, hsl(var(--primary)), hsl(var(--accent)))', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 6px 16px -6px hsl(var(--primary) / 0.7)' }}>
            <span style={{ width:13, height:13, borderRadius:'4px 8px 4px 8px', background:'hsl(var(--primary-foreground))' }} />
          </span>
          <span className="font-serif" style={{ fontWeight:600, fontSize:21, letterSpacing:'-.01em', color:'hsl(var(--foreground))' }}>{CLINIC.brand}</span>
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

        <button onClick={toggleMode} title="Toggle light / dark" style={{ width:32, height:28, borderRadius:999, border:'1px solid hsl(var(--border))', cursor:'pointer', background:'hsl(var(--surface))', display:'flex', alignItems:'center', justifyContent:'center', color:'hsl(var(--foreground))', fontSize:13 }}>
          {mode === 'dark' ? '☾' : '☀'}
        </button>

        <Link href="/book" style={{ textDecoration:'none', background:'hsl(var(--primary))', color:'hsl(var(--primary-foreground))', fontWeight:700, fontSize:14, padding:'11px 20px', borderRadius:999, boxShadow:'0 10px 26px -10px hsl(var(--primary) / 0.8)' }}>
          Book Appointment
        </Link>
      </div>
    </header>
  );
}
