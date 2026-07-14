import BlogList from '@/components/sections/BlogList';
import CtaBand from '@/components/sections/CtaBand';
import RenderBuilder from '@/components/RenderBuilder';
import { getBuilderPage } from '@/lib/get-builder-content';

export const revalidate = 60;

export default async function BlogPage() {
  const content = await getBuilderPage('/blog');
  return (
    <RenderBuilder content={content} fallback={
      <>
        <BlogList />
        <CtaBand />
      </>
    } />
  );
}
