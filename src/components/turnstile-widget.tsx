import Script from "next/script";

const DEV_KEY = '1x00000000000000000000AA';
const PROD_KEY = '0x4AAAAAAAEVVa8_Pjy9pzbM';

export const TurnstileWidget: React.FC<{
  id: string;
}> = ({id}) => (
  <>
    <div
      id={id}
      className="cf-turnstile"
      data-sitekey={process.env.NODE_ENV == 'production' ? PROD_KEY : DEV_KEY}
      data-action={id}
      data-theme="light"
      data-language="de"
    />
    <Script
      src="https://challenges.cloudflare.com/turnstile/v0/api.js"
      strategy="afterInteractive"
    />
  </>
);
