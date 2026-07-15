import { fetchOneEntry } from '@builder.io/sdk-react';

const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY;
export const BUILDER_ENABLED = Boolean(apiKey);

export async function getBuilderPage(urlPath: string) {
  if (!apiKey) return null;
  try {
    const content = await fetchOneEntry({
      model: 'page',
      apiKey,
      userAttributes: { urlPath }
    });
    return content ?? null;
  } catch {
    return null;
  }
}
