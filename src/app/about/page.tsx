import AboutStory from '@/components/sections/AboutStory';
import CtaBand from '@/components/sections/CtaBand';
import RenderBuilder from '@/components/RenderBuilder';
import { getBuilderPage } from '@/lib/get-builder-content';

export const revalidate = 60;

export default async function AboutPage() {
  const content = await getBuilderPage('/about');
  return (
    <RenderBuilder content={content} fallback={
      <>
        <AboutStory />
        <CtaBand />
      </>
    } />
  );
}
