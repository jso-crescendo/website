import {Turnstile} from '@marsidev/react-turnstile';

export const TurnstileWidget: React.FC<{
  id: string;
  onSuccess: (token: string) => void;
}> = ({id, onSuccess}) => (
  <>
    <Turnstile
      id={id}
      siteKey={process.env.NEXT_PUBLIC_TURNSTILE_CLIENT_ID ?? ''}
      options={{
        action: id,
        language: 'de',
        theme: 'light',
      }}
      onSuccess={onSuccess}
    />

    <noscript>
      Protected by{' '}
      <a href="https://www.cloudflare.com/products/turnstile">turnstile</a>.
      Please enable Javascript
    </noscript>
  </>
);
