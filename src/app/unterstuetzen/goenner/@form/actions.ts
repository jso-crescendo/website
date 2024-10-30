'use server';

import {redirect} from 'next/navigation';
import {validateToken} from '@/utils/turnstile';
import {sanitize} from '@/utils/escape';
import {fieldNames} from './fieldnames';
import {signupAsGoenner} from '@/firebase/goenner-signup';

interface SignupResult{
  signupSuccess: boolean
}

export async function signup(prevState: SignupResult, data: FormData): Promise<SignupResult> {
  const token = data.get('cf-turnstile-response')?.toString();
  if (!token || !(await validateToken(token))) {
    return {signupSuccess: false};
  }

  const firstname = sanitize(data.get(fieldNames.firstname)?.toString());
  const lastname = sanitize(data.get(fieldNames.lastname)?.toString());
  const email = sanitize(data.get(fieldNames.email)?.toString());
  const street = sanitize(data.get(fieldNames.street)?.toString());
  const zip = sanitize(data.get(fieldNames.zip)?.toString());
  const city = sanitize(data.get(fieldNames.city)?.toString());
  const amount = Number(sanitize(data.get(fieldNames.amount)?.toString()));

  if (!firstname || !lastname || !street || !zip || !city || !amount) {
    return {signupSuccess: false};
  }

  await signupAsGoenner({
    firstname,
    lastname,
    email,
    street,
    zip,
    city,
    amount,
  });
  
  return {signupSuccess: true};
}
