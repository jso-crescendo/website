import {Turnstile} from '@marsidev/react-turnstile';

const DEV_KEY = '1x00000000000000000000AA';
const PROD_KEY = '0x4AAAAAAAEVVa8_Pjy9pzbM';

export const TurnstileWidget: React.FC<{
  id: string;
  onTokenReceived: (token: string) => void;
}> = ({id, onTokenReceived}) => (
  <Turnstile
    id={id}
    siteKey={process.env.NODE_ENV == 'production' ? PROD_KEY : DEV_KEY}
    options={{theme: 'light', language: 'de', action: id}}
    onSuccess={onTokenReceived}
  />
);
