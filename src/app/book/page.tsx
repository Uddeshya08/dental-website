import { Suspense } from 'react';
import BookingFlow from '@/components/sections/BookingFlow';
import RenderBuilder from '@/components/RenderBuilder';
import { getBuilderPage } from '@/lib/get-builder-content';

export const revalidate = 60;

export default async function BookPage() {
  const content = await getBuilderPage('/book');
  return (
    <RenderBuilder content={content} fallback={
      <Suspense fallback={null}><BookingFlow /></Suspense>
    } />
  );
}
