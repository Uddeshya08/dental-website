'use client';
import { BuilderComponent, useIsPreviewing } from '@builder.io/react';
import '@/components/builder-registry';

const BUILDER_ENABLED = Boolean(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

type Props = {
  model?: string;
  content: any;
  fallback: React.ReactNode;
};

export default function RenderBuilder({ model = 'page', content, fallback }: Props) {
  const isPreviewing = useIsPreviewing();
  if (!BUILDER_ENABLED) return <>{fallback}</>;
  if (content || isPreviewing) return <BuilderComponent model={model} content={content} />;
  return <>{fallback}</>;
}
