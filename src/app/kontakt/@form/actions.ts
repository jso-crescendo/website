'use server';

import {createContactRequest} from '@/firebase/contact-request';
import {sanitize} from '@/utils/escape';
import {validateToken} from '@/utils/turnstile';

interface ContactRequestResult {
  success: boolean;
}

export async function submitContactRequest(
  prevState: ContactRequestResult,
  data: FormData,
): Promise<ContactRequestResult> {
  const token = data.get('cf-turnstile-response')?.toString();
  if (!token || !(await validateToken(token))) {
    return {success: false};
  }

  const name = sanitize(data.get('name')?.toString())!;
  const email = sanitize(data.get('email')?.toString())!;
  const message = sanitize(data.get('message')?.toString())!;

  if (!name || !email || !message) {
    return {success: false};
  }

  await createContactRequest({name, email, message});
  return {success: true};
}
