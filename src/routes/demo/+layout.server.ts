import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
 
export const load = (() => {
  throw redirect(301, 'https://www.google.com');
}) satisfies LayoutServerLoad;