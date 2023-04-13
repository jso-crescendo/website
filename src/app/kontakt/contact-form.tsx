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
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: {isValid, errors},
  } = useForm<FormData>({mode: "onChange",reValidateMode: 'onChange'});
  const onSubmit = handleSubmit((data) => console.log(data));
  console.log(errors);
  return (
    <form
      name="kontaktformular"
      className="w-full rounded-lg p-4 shadow lg:w-1/2"
      onSubmit={onSubmit}
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
