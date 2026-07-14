'use client';
import { builder } from '@builder.io/react';

const key = process.env.NEXT_PUBLIC_BUILDER_API_KEY;
if (key) builder.init(key);

export { builder };
export const BUILDER_ENABLED = Boolean(key);
