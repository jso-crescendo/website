'use client';

import {Button} from '../../../components/button';
import {StatusCard} from '../../../components/status-card';
import {TextArea} from '../../../components/form/text-area';
import {TextField} from '../../../components/form/text-field';
import {TurnstileWidget} from '../../../components/turnstile-widget';
import {submitContactRequest} from './actions';
import {useFormStatus} from 'react-dom';
import { useState, use } from 'react';

export default function ContactForm(
  props: {
    searchParams: Promise<{[key: string]: string | string[] | undefined}>;
  }
) {
  const searchParams = use(props.searchParams);
  const [isTokenSet, setIsTokenSet] = useState(false);

  if (Object.keys(searchParams).includes('ok')) {
    return (
      <StatusCard
        intent="success"
        title="Erfolg"
        message="Vielen Dank für deine Nachricht."
      />
    );
  }

  return (
    <form
      name="kontaktformular"
      className="w-full rounded-lg p-4 shadow-md lg:w-1/2"
      action={submitContactRequest}
    >
      <legend className="pb-4 font-serif text-2xl">Kontaktformular</legend>
      <TextField id="name" name="name" label="Name" required />
      <TextField id="email" type="email" name="email" label="Email" />
      <TextArea
        id="message"
        name="message"
        label="Nachricht"
        rows={5}
        required
      />
      <div className="my-2 flex justify-center">
        <TurnstileWidget
          id="contact-form"
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
