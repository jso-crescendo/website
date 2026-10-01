'use server';

import {createContactRequest} from '@/firebase/contact-request';
import {sanitize} from '@/utils/escape';
import {getClientIp, isRateLimited} from '@/utils/rate-limit';
import {validateToken} from '@/utils/turnstile';
import {FIELD_LIMITS, isValidEmail} from '@/utils/validation';

interface ContactRequestResult {
  success: boolean;
}

const TURNSTILE_ACTION = 'contact-form';

export async function submitContactRequest(
  _prevState: ContactRequestResult,
  data: FormData,
): Promise<ContactRequestResult> {
  const ip = await getClientIp();
  if (isRateLimited(`${TURNSTILE_ACTION}:${ip}`)) {
    return {success: false};
  }

  const token = data.get('cf-turnstile-response')?.toString();
  if (!token || !(await validateToken(token, TURNSTILE_ACTION, ip))) {
    return {success: false};
  }

  const name = sanitize(data.get('name')?.toString(), FIELD_LIMITS.short);
  const email = sanitize(data.get('email')?.toString(), FIELD_LIMITS.email);
  const message = sanitize(
    data.get('message')?.toString(),
    FIELD_LIMITS.message,
  );

  if (!name || !email || !message || !isValidEmail(email)) {
    return {success: false};
  }

  await createContactRequest({name, email, message});
  return {success: true};
}
