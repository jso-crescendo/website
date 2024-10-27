'use client';

import {signup} from './actions';
import {useFormStatus} from 'react-dom';
import {useState} from 'react';
import {StatusCard} from '../../../../components/status-card';
import {TextField} from '../../../../components/form/text-field';
import {TurnstileWidget} from '../../../../components/turnstile-widget';
import {Button} from '../../../../components/button';

export default function GoennerForm({
  searchParams,
}: {
  searchParams: {[key: string]: string | string[] | undefined};
}) {
  const [isTokenSet, setIsTokenSet] = useState(false);

  if (Object.keys(searchParams).includes('ok')) {
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
      action={signup}
    >
      <legend className="pb-4 font-serif text-2xl">
        Gönner:innen Anmeldeformular
      </legend>
      <div className="flex flex-col lg:flex-row lg:gap-6">
        <TextField
          className="lg:w-1/2"
          id="firstname"
          name="firstname"
          label="Vorname"
          required
        />
        <TextField
          className="lg:w-1/2"
          id="lastname"
          name="lastname"
          label="Nachname"
          required
        />
      </div>
      <TextField
        id="email"
        type="email"
        name="email"
        label="Email"
        hint="Wenn sie uns ihre Email-Adresse hinterlassen, stellen wir ihnen die Rechnung digital zu."
      />
      <div className="pt-4 mb-6">
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
        <TextField id="street" name="street" label="Strasse" required />
        <div className="flex flex-col lg:flex-row lg:gap-6">
          <TextField
            className="lg:w-1/3 w-full"
            id="zip"
            type="number"
            name="zip"
            label="PLZ"
            required
          />
          <TextField
            className="lg:w-2/3 w-full"
            id="city"
            name="city"
            label="Ort"
            required
          />
        </div>
      </div>
      <TextField
        id="amount"
        type="number"
        min={100}
        name="amount"
        label="Betrag"
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
