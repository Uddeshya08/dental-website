import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import PopularServices from '@/components/sections/PopularServices';
import AboutNumbered from '@/components/sections/AboutNumbered';
import Journey from '@/components/sections/Journey';
import BeforeAfter from '@/components/sections/BeforeAfter';
import Team from '@/components/sections/Team';
import Testimonials from '@/components/sections/Testimonials';
import Hours from '@/components/sections/Hours';
import BlogTeaser from '@/components/sections/BlogTeaser';
import CtaBand from '@/components/sections/CtaBand';
import RenderBuilder from '@/components/RenderBuilder';
import { getBuilderPage } from '@/lib/get-builder-content';

export const revalidate = 60;

export default async function HomePage() {
  const content = await getBuilderPage('/');
  return (
    <RenderBuilder content={content} fallback={
      <>
        <Hero />
        <TrustBar />
        <PopularServices />
        <AboutNumbered />
        <Journey />
        <BeforeAfter />
        <Team />
        <Testimonials />
        <Hours />
        <BlogTeaser />
        <CtaBand />
      </>
    } />
  );
}
