'use server';

import {validateToken} from '@/utils/turnstile';
import {sanitize} from '@/utils/escape';
import {fieldNames} from './fieldnames';
import {signupCrowdfunding} from '@/firebase/crowdfunding-signup';

interface SignupResult {
  signupSuccess: boolean;
}

export async function signup(
  prevState: SignupResult,
  data: FormData,
): Promise<SignupResult> {
  const token = data.get('cf-turnstile-response')?.toString();
  if (!token || !(await validateToken(token))) {
    return {signupSuccess: false};
  }

  const fullname = sanitize(data.get(fieldNames.fullname)?.toString());
  const email = sanitize(data.get(fieldNames.email)?.toString());

  if (!fullname || !email) {
    return {signupSuccess: false};
  }

  await signupCrowdfunding({
    fullname,
    email,
  });

  return {signupSuccess: true};
}
