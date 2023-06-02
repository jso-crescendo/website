/* eslint-disable tailwindcss/no-custom-classname */
export const TurnstileWidget: React.FC<{
  id: string;
}> = ({id}) => (
  <>
    <div
      id={id}
      className="cf-turnstile"
      data-sitekey={process.env.TURNSTILE_CLIENT_ID}
      data-action={id}
      data-theme="light"
      data-language="de"
    />

    <noscript>
      Protected by{' '}
      <a href="https://www.cloudflare.com/products/turnstile">turnstile</a>.
      Please enable Javascript
    </noscript>
  </>
);
