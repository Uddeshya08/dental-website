import { builder } from '@builder.io/sdk';

const key = process.env.NEXT_PUBLIC_BUILDER_API_KEY;
if (key) builder.init(key);

export const BUILDER_ENABLED = Boolean(key);

export async function getBuilderPage(urlPath: string) {
  if (!BUILDER_ENABLED) return null;
  try {
    const content = await builder
      .get('page', { userAttributes: { urlPath }, prerender: false })
      .toPromise();
    return content ?? null;
  } catch {
    return null;
  }
}
