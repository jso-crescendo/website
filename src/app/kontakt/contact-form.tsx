'use client';

import {Fragment, useCallback, useState} from 'react';
import {addDoc, collection, serverTimestamp} from 'firebase/firestore/lite';

import {Button} from '../../components/button';
import {TextArea} from '../../components/form/text-area';
import {TextField} from '../../components/form/text-field';
import {useFirestore} from '../../hooks/useFirebase';
import {useForm} from 'react-hook-form';

interface FormData {
  name: string;
  email?: string;
  message: string;
}
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ContactForm: React.FC = () => {
  const {loaded, firestore} = useFirestore(250);
  const [formState, setFormState] = useState<
    'ready' | 'submitting' | 'submitted' | 'error'
  >('ready');
  const storeContactRequest = useCallback(
    async (name: string, email: string | undefined, message: string) => {
      if (!loaded) {
        return;
      }
      return addDoc(collection(firestore, 'contactRequests'), {
        name,
        email,
        message,
        createdAt: serverTimestamp(),
      });
    },
    [firestore],
  );

  const handleSubmit = useCallback(
    ({name, email, message}: FormData) => {
      return storeContactRequest(name, email, message)
        .then(() => {
          setFormState('submitting');
        })
        .catch(() => {
          setFormState('error');
        })
        .finally(() => {
          setFormState('submitted');
        });
    },
    [storeContactRequest],
  );

  if (!loaded) {
    return <div>loading</div>;
  }
  switch (formState) {
    case 'ready':
      return <Form onSubmit={handleSubmit} />;
    case 'submitting':
      return <div>submitting</div>;
    case 'submitted':
      return <div>success</div>;
    case 'error':
      return <div>error</div>
  }
};

const Form: React.FC<{
  onSubmit: (data: FormData) => void;
}> = ({onSubmit}) => {
  const {
    register,
    handleSubmit,
    formState: {isValid, errors},
  } = useForm<FormData>({mode: 'onChange', reValidateMode: 'onChange'});

  return (
    <form
      name="kontaktformular"
      className="w-full rounded-lg p-4 shadow lg:w-1/2"
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
      })}
    >
      <legend className="pb-4 font-serif text-2xl">Kontaktformular</legend>
      <TextField
        {...register('name', {required: 'Bitte gebe einen Namen ein'})}
        label="Name"
        required
        errorMessage={errors.name?.message}
      />
      <TextField
        {...register('email', {
          pattern: {
            value: EMAIL_PATTERN,
            message: 'Bitte gebe eine gültige Email ein',
          },
        })}
        label="Email"
        type="email"
        errorMessage={errors.email?.message}
      />
      <TextArea
        {...register('message', {required: 'Bitte gebe eine Nachricht ein'})}
        label="Nachricht"
        rows={5}
        required
        errorMessage={errors.message?.message}
      />
      <Button
        type="submit"
        text="Absenden"
        variant="primary"
        className="float-right"
        disabled={!isValid}
      />
    </form>
  );
};
