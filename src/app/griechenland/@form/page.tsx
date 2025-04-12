'use client';

import {signup} from './actions';
import {useFormStatus} from 'react-dom';
import {useActionState, useState} from 'react';
import {StatusCard} from '@/components/status-card';
import {TextField} from '@/components/form/text-field';
import {TurnstileWidget} from '@/components/turnstile-widget';
import {Button} from '@/components/button';
import {fieldNames} from './fieldnames';
import {Text} from '@/components/text';

export default function GoennerForm() {
  const [{signupSuccess}, submit] = useActionState(signup, {
    signupSuccess: false,
  });
  const [isTokenSet, setIsTokenSet] = useState(false);

  if (signupSuccess) {
    return (
      <StatusCard
        intent="success"
        title="Erflogreich gespeichert"
        message="Wir haben Ihre Daten erhalten und melden uns bei Ihnen sobald sie am Crowdfunding teilnehmen können."
      />
    );
  }

  return (
    <form
      id="anmeldeformular"
      name="crowdfunding-anmeldeformular"
      className="w-full rounded-lg p-4 shadow-md lg:w-1/2"
      action={submit}
    >
      <legend className="pb-4 font-serif text-2xl">
        Crowdfunding Anmeldeformular
      </legend>
      <Text>
        Leider steht unser WeMakeIt-Crowdfundingprojekt noch nicht bereit. Damit
        sie den Start nicht verpassen, tragen Sie bitte Ihre Email-Adresse im
        folgenden Formular ein. Wir melden uns bei Ihnen sobald das Crowdfunding
        bereit ist.
      </Text>
      <TextField
        className="mt-4"
        id={fieldNames.fullname}
        name={fieldNames.fullname}
        label="Name"
        required
        autoFocus
      />
      <TextField
        id={fieldNames.email}
        name={fieldNames.email}
        type="email"
        label="Email"
        required
        hint="Wir verwenden Ihre Email ausschliesslich für die Kommunikation zu diesem Crowdfunding."
      />

      <div className="my-2 flex justify-center">
        <TurnstileWidget
          id="crowdfunding-signup-form"
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
