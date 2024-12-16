'use server';

import {createSignupRequest} from '@/firebase/email-signup';
import {sanitize} from '@/utils/escape';
import {validateToken} from '@/utils/turnstile';
interface SignupResult {
  success: boolean;
}
export async function submitSignupRequest(
  prevState: SignupResult,
  data: FormData,
): Promise<SignupResult> {
  const token = data.get('cf-turnstile-response')?.toString();
  if (!token || !(await validateToken(token))) {
    return {success: false};
  }

  const name = sanitize(data.get('name')?.toString())!;
  const email = sanitize(data.get('email')?.toString())!;

  if (!name || !email) {
    return {success: false};
  }

  await createSignupRequest({name, email});
  return {success: true};
}
