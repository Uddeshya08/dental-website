import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingBookBtn from '@/components/FloatingBookBtn';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Dentheal — Modern Dental Clinic',
  description: 'Modern care, gentle hands, and a team that explains everything.',
  icons: {
    icon: '/dentheal-logo.jpeg',
    shortcut: '/dentheal-logo.jpeg',
    apple: '/dentheal-logo.jpeg'
  },
  openGraph: {
    title: 'Dentheal',
    description: 'Dentistry that feels calm, clear & genuinely kind.',
    images: ['/dentheal-logo.jpeg']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Spectral:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div aria-hidden style={{ position:'fixed', top:-120, left:-80, width:420, height:420, borderRadius:'50%', background:'radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.18), transparent 68%)', filter:'blur(20px)', animation:'dz-float 18s ease-in-out infinite', pointerEvents:'none', zIndex:0 }} />
        <div aria-hidden style={{ position:'fixed', bottom:-160, right:-120, width:480, height:480, borderRadius:'50%', background:'radial-gradient(circle at 60% 40%, hsl(var(--accent) / 0.16), transparent 68%)', filter:'blur(20px)', animation:'dz-float2 22s ease-in-out infinite', pointerEvents:'none', zIndex:0 }} />
        <Header />
        <main style={{ position:'relative', zIndex:1, animation:'dz-fade .5s ease both' }}>{children}</main>
        <Footer />
        <FloatingBookBtn />
        <Reveal />
      </body>
    </html>
  );
}
