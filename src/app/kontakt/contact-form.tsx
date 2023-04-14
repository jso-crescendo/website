'use client';

import {addDoc, collection, serverTimestamp} from 'firebase/firestore/lite';
import {useCallback, useState} from 'react';
import {useForm} from 'react-hook-form';

import {Button} from '../../components/button';
import {TextArea} from '../../components/form/text-area';
import {TextField} from '../../components/form/text-field';
import {Loader} from '../../components/loader';
import {Text} from '../../components/text';
import {useFirestore} from '../../hooks/useFirebase';
import {Error as ErrorIcon} from '../../icons/error';
import {Info} from '../../icons/info';

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
    return (
      <form
        name="kontaktformular"
        className="relative block h-96 w-full items-center rounded-lg p-4 shadow-md lg:w-1/2"
      >
        <legend className="pb-4 font-serif text-2xl opacity-20">
          Kontaktformular
        </legend>
        <Loader />
      </form>
    );
  }

  switch (formState) {
    case 'ready':
      return <Form onSubmit={handleSubmit} />;
    case 'submitting':
    case 'submitted':
      return <SuccessCard />;
    case 'error':
      return <ErrorCard />;
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
      className="w-full rounded-lg p-4 shadow-md lg:w-1/2"
      onSubmit={handleSubmit(onSubmit)}
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
const SuccessCard: React.FC = () => (
  <div className="flex w-full flex-row items-center gap-4 rounded-lg bg-success-darker p-8 text-background shadow-md lg:w-1/2">
    <Info className="m-2 h-14" />
    <div>
      <h3 className="pb-2 font-serif text-2xl">Erfolg</h3>
      <Text>Vielen Dank für deine Nachricht</Text>
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
