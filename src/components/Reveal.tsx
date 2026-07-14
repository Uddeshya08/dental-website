'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Reveal() {
  const pathname = usePathname();
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { (e.target as HTMLElement).setAttribute('data-shown','1'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    const vh = window.innerHeight || 800;
    const nodes = document.querySelectorAll('[data-reveal]:not([data-shown])');
    nodes.forEach(el => {
      if ((el as HTMLElement).getBoundingClientRect().top < vh * 0.92) el.setAttribute('data-shown','1');
      else io.observe(el);
    });
    const t = setTimeout(() => {
      document.querySelectorAll('[data-reveal]:not([data-shown])').forEach(el => el.setAttribute('data-shown','1'));
    }, 1400);
    return () => { io.disconnect(); clearTimeout(t); };
  }, [pathname]);
  return null;
}
