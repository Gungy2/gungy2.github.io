import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
 
export const load = (() => {
  throw redirect(301, 'https://youtu.be/vHNp8lg-79U');
}) satisfies LayoutServerLoad;