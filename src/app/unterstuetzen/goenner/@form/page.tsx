'use client';

import {signup} from './actions';
import {useFormStatus} from 'react-dom';
import {useActionState, useState} from 'react';
import {StatusCard} from '@/components/status-card';
import {TextField} from '@/components/form/text-field';
import {TurnstileWidget} from '@/components/turnstile-widget';
import {Button} from '@/components/button';
import {fieldNames} from './fieldnames';

export default function GoennerForm() {
  const [{signupSuccess}, submit] = useActionState(signup, {
    signupSuccess: false,
  });
  const [isTokenSet, setIsTokenSet] = useState(false);

  if (signupSuccess) {
    return (
      <StatusCard
        intent="success"
        title="Erfolgreich angemeldet"
        message="Wir haben Ihre Anmeldung erhalten und stellen Ihnen in den nächsten Tagen die Rechnung zu. Vielen Dank!"
      />
    );
  }

  return (
    <form
      id="anmeldeformular"
      name="goenner-anmeldeformular"
      className="w-full rounded-lg p-4 shadow-md lg:w-1/2"
      action={submit}
    >
      <legend className="pb-4 font-serif text-2xl">
        Gönner:innen Anmeldeformular
      </legend>
      <div className="flex flex-col lg:flex-row lg:gap-6">
        <TextField
          className="lg:w-1/2"
          id={fieldNames.firstname}
          name={fieldNames.firstname}
          label="Vorname"
          required
          autoFocus
        />
        <TextField
          className="lg:w-1/2"
          id={fieldNames.lastname}
          name={fieldNames.lastname}
          label="Nachname"
          required
        />
      </div>
      <TextField
        id={fieldNames.email}
        name={fieldNames.email}
        type="email"
        label="Email"
        hint="Wenn sie uns ihre Email-Adresse hinterlassen, stellen wir ihnen die Rechnung digital zu."
      />
      <div className="mb-6 pt-4">
        <span className="block font-sans text-lg text-on-background">
          Adresse
        </span>
        <div className="mb-2 text-sm text-neutral-600">
          <span>Wir nutzen diese Adresse um Ihnen die Flyer zuzustellen.</span>
          <br />
          <span>
            Ausserdem senden wir Ihnen die Rechnung per Post zu, falls Sie uns
            keine Email-Adresse angegeben haben.
          </span>
        </div>
        <TextField
          id={fieldNames.street}
          name={fieldNames.street}
          label="Strasse"
          required
        />
        <div className="flex flex-col lg:flex-row lg:gap-6">
          <TextField
            className="w-full lg:w-1/3"
            id={fieldNames.zip}
            name={fieldNames.zip}
            type="number"
            label="PLZ"
            required
          />
          <TextField
            className="w-full lg:w-2/3"
            id={fieldNames.city}
            name={fieldNames.city}
            label="Ort"
            required
          />
        </div>
      </div>
      <TextField
        id={fieldNames.amount}
        name={fieldNames.amount}
        type="number"
        step="0.05"
        min={100}
        label="Betrag"
        required
      />
      <div className="my-2 flex justify-center">
        <TurnstileWidget
          id="goenner-signup-form"
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
