'use client';
import { Content, isPreviewing } from '@builder.io/sdk-react';
import { customComponents } from '@/builder-registry';

const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY!;

type Props = {
  model?: string;
  content: any;
  fallback: React.ReactNode;
};

export default function RenderBuilder({ model = 'page', content, fallback }: Props) {
  if (!apiKey) return <>{fallback}</>;
  const previewing = typeof window !== 'undefined' && isPreviewing();
  if (!content && !previewing) return <>{fallback}</>;
  return (
    <Content
      model={model}
      content={content}
      apiKey={apiKey}
      customComponents={customComponents}
    />
  );
}
