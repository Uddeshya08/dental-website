import ServicesGrid from '@/components/sections/ServicesGrid';
import CtaBand from '@/components/sections/CtaBand';
import RenderBuilder from '@/components/RenderBuilder';
import { getBuilderPage } from '@/lib/get-builder-content';

export const revalidate = 60;

export default async function ServicesPage() {
  const content = await getBuilderPage('/services');
  return (
    <RenderBuilder content={content} fallback={
      <>
        <ServicesGrid />
        <CtaBand />
      </>
    } />
  );
}
