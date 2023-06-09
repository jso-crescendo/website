'use server';

import {createContactRequest} from '../../../firebase/contact-request';
import {redirect} from 'next/navigation';
import {sanitize} from '../../../utils/escape';
import {validateToken} from '../../../utils/turnstile';

export async function submitContactRequest(data: FormData) {
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

  await createContactRequest({name, email, message});
  redirect('/kontakt?ok');
}
