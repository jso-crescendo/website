'use server';

import {redirect} from 'next/navigation';
import { validateToken } from '../../../../utils/turnstile';
import { sanitize } from '../../../../utils/escape';

export async function signup(data: FormData) {
  const token = data.get('cf-turnstile-response')?.toString();
  if (!token || !(await validateToken(token))) {
    throw new Error('turnstile token not valid');
  }

  const name = sanitize(data.get('name')?.toString())!;
  const email = sanitize(data.get('email')?.toString())!;
  const message = sanitize(data.get('message')?.toString())!;

  if (!name || !message) {
    throw new Error('missing data');
  }

  console.log({name, email, message});
  redirect('/unterstuetzen/goenner?ok');
}
