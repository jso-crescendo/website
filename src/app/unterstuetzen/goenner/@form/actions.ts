'use server';

import {signupAsGoenner} from '@/firebase/goenner-signup';
import {sanitize} from '@/utils/escape';
import {getClientIp, isRateLimited} from '@/utils/rate-limit';
import {validateToken} from '@/utils/turnstile';
import {FIELD_LIMITS, isValidEmail} from '@/utils/validation';
import {fieldNames} from './fieldnames';

interface SignupResult {
  signupSuccess: boolean;
}

const TURNSTILE_ACTION = 'goenner-signup-form';

export async function signup(
  _prevState: SignupResult,
  data: FormData,
): Promise<SignupResult> {
  const ip = await getClientIp();
  if (isRateLimited(`${TURNSTILE_ACTION}:${ip}`)) {
    return {signupSuccess: false};
  }

  const token = data.get('cf-turnstile-response')?.toString();
  if (!token || !(await validateToken(token, TURNSTILE_ACTION, ip))) {
    return {signupSuccess: false};
  }

  const firstname = sanitize(
    data.get(fieldNames.firstname)?.toString(),
    FIELD_LIMITS.short,
  );
  const lastname = sanitize(
    data.get(fieldNames.lastname)?.toString(),
    FIELD_LIMITS.short,
  );
  const email = sanitize(
    data.get(fieldNames.email)?.toString(),
    FIELD_LIMITS.email,
  );
  const street = sanitize(
    data.get(fieldNames.street)?.toString(),
    FIELD_LIMITS.short,
  );
  const zip = sanitize(
    data.get(fieldNames.zip)?.toString(),
    FIELD_LIMITS.short,
  );
  const city = sanitize(
    data.get(fieldNames.city)?.toString(),
    FIELD_LIMITS.short,
  );
  const amount = Number(
    sanitize(data.get(fieldNames.amount)?.toString(), FIELD_LIMITS.short),
  );

  if (!firstname || !lastname || !street || !zip || !city || !amount) {
    return {signupSuccess: false};
  }

  if (email && !isValidEmail(email)) {
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
