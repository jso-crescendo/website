'use client';

import {Button} from '../../components/button';
import {TextArea} from '../../components/form/text-area';
import {TextField} from '../../components/form/text-field';
import {useForm} from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: {isValid},
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form
      name="kontaktformular"
      className="rounded-lg p-4 shadow w-full lg:w-1/2"
      onSubmit={onSubmit}
    >
      <legend className="pb-4 font-serif text-2xl">Kontaktformular</legend>
      <TextField
        {...register('name', {required: true})}
        label="Name"
        required
      />
      <TextField {...register('email')} label="Email" type="email" />
      <TextArea
        {...register('message', {required: true})}
        label="Nachricht"
        rows={5}
        required
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
