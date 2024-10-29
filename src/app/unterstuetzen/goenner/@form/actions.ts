'use server';

import {redirect} from 'next/navigation';
import {validateToken} from '@/utils/turnstile';
import {sanitize} from '@/utils/escape';
import {fieldNames} from './fieldnames';
import {signupAsGoenner} from '@/firebase/goenner-signup';

export async function signup(data: FormData) {
  const token = data.get('cf-turnstile-response')?.toString();
  if (!token || !(await validateToken(token))) {
    throw new Error('turnstile token not valid');
  }

  const firstname = sanitize(data.get(fieldNames.firstname)?.toString());
  const lastname = sanitize(data.get(fieldNames.lastname)?.toString());
  const email = sanitize(data.get(fieldNames.email)?.toString());
  const street = sanitize(data.get(fieldNames.street)?.toString());
  const zip = sanitize(data.get(fieldNames.zip)?.toString());
  const city = sanitize(data.get(fieldNames.city)?.toString());
  const amount = Number(sanitize(data.get(fieldNames.amount)?.toString()));

  if (!firstname || !lastname || !street || !zip || !city || !amount) {
    throw new Error('missing data');
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
  redirect('/unterstuetzen/goenner?ok');
}
