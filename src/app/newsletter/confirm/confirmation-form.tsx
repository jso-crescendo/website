'use client';

import {useCallback, useState} from 'react';

import {Loader} from '../../../components/loader';
import {Text} from '../../../components/text';
import {TurnstileWidget} from '../../../components/turnstile-widget';
import {Error as ErrorIcon} from '../../../icons/error';
import {Info} from '../../../icons/info';
import {Spinner} from '../../../icons/spinner';

export const ConfirmationForm: React.FC = () => {
  const [state, setState] = useState<
    'verifyUser' | 'submitting' | 'success' | 'error'
  >('verifyUser');

  const onTokenReceived = useCallback(async (token: string) => {
    setState('submitting');
    const code = new URLSearchParams(location.search).get('code');

    if (!code) {
      setState('error');
      return;
    }

    await fetch('/api/newsletter/confirm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({code, token}),
    })
      .then(async (res) => {
        if (res.ok) {
          return await res.json();
        }
        throw new Error('server response does not indicate success');
      })
      .then((res) => {
        if (res?.success) {
          setState('success');
        } else {
          setState('error');
        }
      })
      .catch(() => {
        setState('error');
      });
  }, []);

  switch (state) {
    case 'verifyUser':
      return (
        <TurnstileWidget
          id="newsletter-confirmation"
          onTokenReceived={onTokenReceived}
        />
      );
    case 'submitting':
      return (
        <div>
          <Spinner className="m-4 mx-auto h-12 w-12 animate-spin" />
          <p>Code wird überprüft</p>
        </div>
      );
    case 'success':
      return <SuccessCard />;
    case 'error':
      return <ErrorCard />;
  }
};

const SuccessCard: React.FC = () => (
  <div className="flex w-full flex-row items-center gap-4 rounded-lg bg-success-darker p-8 text-background shadow-md lg:w-1/2">
    <Info className="m-2 h-14" />
    <div>
      <h3 className="pb-2 font-serif text-2xl">Bestätigung erfolgreich</h3>
      <Text>
        Code erfolgreich bestätigt. Sie erhalten in Zukunft unseren Newsletter
        direkt in Ihr Postfach
      </Text>
    </div>
  </div>
);

const ErrorCard: React.FC = () => (
  <div className="flex w-full flex-row items-center gap-4 rounded-lg bg-error-lighter p-8 text-background shadow-md lg:w-1/2">
    <ErrorIcon className="m-2 h-14" />
    <div>
      <h3 className="pb-2 font-serif text-2xl">
        Es ist ein Fehler aufgetreten
      </h3>
      <Text>
        Möglicherweise ist der Code ungültig oder Sie haben ihre Email bereits
        bestätigt.
      </Text>
    </div>
  </div>
);
