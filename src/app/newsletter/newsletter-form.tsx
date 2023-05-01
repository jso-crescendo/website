'use client';

import classNames from 'classnames';
import {useCallback, useState} from 'react';
import {useForm} from 'react-hook-form';

import {Button} from '../../components/button';
import {TextField} from '../../components/form/text-field';
import {Text} from '../../components/text';
import {TurnstileWidget} from '../../components/turnstile-widget';
import {Error as ErrorIcon} from '../../icons/error';
import {Info} from '../../icons/info';

interface FormData {
  name: string;
  email: string;
}
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const NewsletterForm: React.FC = () => {
  const [formState, setFormState] = useState<
    'ready' | 'submitting' | 'submitted' | 'error'
  >('ready');

  const handleSubmit = useCallback(({name, email}: FormData, token: string) => {
    setFormState('submitting');

    return fetch('/api/newsletter/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email, token}),
    })
      .then((res: any) => {
        setFormState(res.ok ? 'submitted' : 'error');
      })
      .catch(() => {
        setFormState('error');
      });
  }, []);

  switch (formState) {
    case 'ready':
    case 'submitting':
      return <Form onSubmit={handleSubmit} />;
    case 'submitted':
      return <SuccessCard />;
    case 'error':
      return <ErrorCard />;
  }
};

const Form: React.FC<{
  onSubmit: (data: FormData, token: string) => void;
}> = ({onSubmit}) => {
  const {
    register,
    handleSubmit,
    formState: {isValid, errors, isSubmitting},
  } = useForm<FormData>({mode: 'onChange', reValidateMode: 'onChange'});
  const [turnstileToken, setTurnstileToken] = useState('');

  return (
    <form
      name="newsletterFormular"
      className={classNames('w-full rounded-lg p-4 shadow-md lg:w-1/2', {
        'cursor-wait': isSubmitting,
      })}
      onSubmit={handleSubmit((data) => onSubmit(data, turnstileToken))}
    >
      <legend className="pb-4 font-serif text-2xl">Newsletter</legend>
      <TextField
        {...register('name', {required: 'Bitte gebe einen Namen ein'})}
        label="Name"
        required
        errorMessage={errors.name?.message}
        disabled={isSubmitting}
      />
      <TextField
        {...register('email', {
          pattern: {
            value: EMAIL_PATTERN,
            message: 'Bitte gebe eine gültige Email ein',
          },
        })}
        label="Email"
        required
        type="email"
        errorMessage={errors.email?.message}
        disabled={isSubmitting}
      />
      <div className="my-2 flex justify-center">
        <TurnstileWidget
          id="newsletter-form"
          onTokenReceived={setTurnstileToken}
        />
      </div>
      <Button
        type="submit"
        text="Anmelden"
        variant="primary"
        className="float-right"
        loading={isSubmitting}
        disabled={!isValid}
      />
    </form>
  );
};

const SuccessCard: React.FC = () => (
  <div className="flex w-full flex-row items-center gap-4 rounded-lg bg-success-darker p-8 text-background shadow-md lg:w-1/2">
    <Info className="m-2 h-14" />
    <div>
      <h3 className="pb-2 font-serif text-2xl">Anmeldung erfolgreich</h3>
      <Text>Sie erhalten in Kürze eine Bestätigungsemail</Text>
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
        Bitte kontaktiere uns per{' '}
        <a href="mailto:kontakt@jso-crescendo.ch">Mail</a>
      </Text>
    </div>
  </div>
);
