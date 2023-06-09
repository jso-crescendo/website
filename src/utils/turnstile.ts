const TURNSTILE_ENDPOINT =
  'https://challenges.cloudflare.com/turnstile/v0/siteverify';
export const validateToken = async (token: string): Promise<boolean> => {
  console.info('Start validating turnstileToken');

  if (!process.env.TURNSTILE_SECRET) {
    console.error('Turnstile secret not set');
    return false;
  }

  const response = await fetch(TURNSTILE_ENDPOINT, {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    cache: 'no-store',
    body: `secret=${encodeURIComponent(
      process.env.TURNSTILE_SECRET,
    )}&response=${encodeURIComponent(token)}`,
  }).then((r) => r.json());

  if (!response.success) {
    console.warn('token invalid', response);
    return false;
  }
  console.info('token is valid');
  return true;
};
