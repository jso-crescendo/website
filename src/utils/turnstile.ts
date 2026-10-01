const TURNSTILE_ENDPOINT =
  'https://challenges.cloudflare.com/turnstile/v0/siteverify';

/**
 * Validates a Turnstile token against the siteverify endpoint.
 *
 * @param token     The `cf-turnstile-response` value submitted with the form.
 * @param action    The `action` the widget was configured with — must match the
 *                  value returned by siteverify. Prevents reusing a token
 *                  solved for one form on another.
 * @param remoteIp  Optional visitor IP, forwarded as `remoteip` for an
 *                  additional server-side check by Cloudflare.
 */
export const validateToken = async (
  token: string,
  action: string,
  remoteIp?: string,
): Promise<boolean> => {
  console.info('Start validating turnstileToken');

  if (!process.env.TURNSTILE_SECRET) {
    console.error('Turnstile secret not set');
    return false;
  }

  const body = new URLSearchParams({
    secret: process.env.TURNSTILE_SECRET,
    response: token,
  });
  if (remoteIp) {
    body.set('remoteip', remoteIp);
  }

  const response = await fetch(TURNSTILE_ENDPOINT, {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    cache: 'no-store',
    body,
  }).then((r) => r.json());

  if (!response.success) {
    console.warn('token invalid', response);
    return false;
  }

  if (response.action !== action) {
    console.warn('token action mismatch', {
      expected: action,
      actual: response.action,
    });
    return false;
  }

  console.info('token is valid');
  return true;
};
