'use server';

import {createSignupRequest} from '../../../firebase/email-signup';
import {redirect} from 'next/navigation';
import {sanitize} from '../../../utils/escape';
import {validateToken} from '../../../utils/turnstile';

export async function submitSignupRequest(data: FormData) {
  const token = data.get('cf-turnstile-response')?.toString();
  if (!token || !(await validateToken(token))) {
    throw new Error('turnstile token not valid');
  }

  const name = sanitize(data.get('name')?.toString())!;
  const email = sanitize(data.get('email')?.toString())!;

  if (!name || !email) {
    throw new Error('missing data');
  }

  await createSignupRequest({name, email});
  redirect('/newsletter?ok');
}
