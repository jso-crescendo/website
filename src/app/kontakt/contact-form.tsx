'use client';

import {useCallback, useState} from 'react';

import {Button} from '../../components/button';
import {StatusCard} from '../../components/status-card';
import {TextArea} from '../../components/form/text-area';
import {TextField} from '../../components/form/text-field';
import {TurnstileWidget} from '../../components/turnstile-widget';
import classNames from 'classnames';
import {useForm} from 'react-hook-form';

interface FormData {
  name: string;
  email?: string;
  message: string;
}
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<
    'ready' | 'submitting' | 'submitted' | 'error'
  >('ready');

  const handleSubmit = useCallback((data: FormData, token: string) => {
    setFormState('submitting');

    return fetch('/api/contact/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({...data, token}),
    })
      .then((res) => {
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
      return (
        <StatusCard
          intent="success"
          title="Erfolg"
          message="Vielen Dank für deine Nachricht."
        />
      );
    case 'error':
      return (
        <StatusCard
          intent="error"
          title="Es ist ein Fehler aufgetreten"
          message={
            <>
              Bitte kontaktiere uns per{' '}
              <a href="mailto:kontakt@jso-crescendo.ch">Mail</a>
            </>
          }
        />
      );
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
      name="kontaktformular"
      className={classNames('w-full rounded-lg p-4 shadow-md lg:w-1/2', {
        'cursor-wait': isSubmitting,
      })}
      onSubmit={handleSubmit((data) => onSubmit(data, turnstileToken))}
    >
      <legend className="pb-4 font-serif text-2xl">Kontaktformular</legend>
      <TextField
        {...register('name', {required: 'Bitte gebe einen Namen ein'})}
        id="name"
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
        id="email"
        label="Email"
        type="email"
        errorMessage={errors.email?.message}
        disabled={isSubmitting}
      />
      <TextArea
        {...register('message', {required: 'Bitte gebe eine Nachricht ein'})}
        id="message"
        label="Nachricht"
        rows={5}
        required
        errorMessage={errors.message?.message}
        disabled={isSubmitting}
      />
      <div className="my-2 flex justify-center">
        <TurnstileWidget
          id="contact-form"
          onTokenReceived={setTurnstileToken}
        />
      </div>
      <Button
        type="submit"
        text={isSubmitting ? 'Wird gesendet...' : 'Absenden'}
        variant="primary"
        className="float-right"
        loading={isSubmitting}
        disabled={!isValid || !turnstileToken}
      />
    </form>
  );
};
