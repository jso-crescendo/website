'use client';

import {Button} from '../../../components/button';
import {StatusCard} from '../../../components/status-card';
import {TextField} from '../../../components/form/text-field';
import {TurnstileWidget} from '../../../components/turnstile-widget';
import {submitSignupRequest} from './action';
import {useFormStatus} from 'react-dom';
import {useState} from 'react';

export default function ContactForm({
  searchParams,
}: {
  searchParams: {[key: string]: string | string[] | undefined};
}) {
  const [isTokenSet, setIsTokenSet] = useState(false);

  if (Object.keys(searchParams).includes('ok')) {
    return (
      <StatusCard
        intent="success"
        title="Anmeldung erfolgreich"
        message="Sie erhalten in Kürze eine Bestätigungsemail"
      />
    );
  }

  return (
    <form
      name="newsletterFormular"
      className="w-full rounded-lg p-4 shadow-md lg:w-1/2"
      action={submitSignupRequest}
    >
      <legend className="pb-4 font-serif text-2xl">Anmeldung Newsletter</legend>
      <TextField id="name" name="name" label="Name" required />
      <TextField id="email" type="email" name="email" label="Email" required />
      <div className="my-2 flex justify-center">
        <TurnstileWidget
          id="newsletter-form"
          onSuccess={() => setIsTokenSet(true)}
        />
      </div>
      <SubmitButton enabled={isTokenSet} />
    </form>
  );
}

const SubmitButton = ({enabled}: {enabled: boolean}) => {
  const {pending} = useFormStatus();

  return (
    <Button
      type="submit"
      text="Absenden"
      variant="primary"
      className="float-right"
      loading={pending}
      disabled={!enabled}
    />
  );
};
