'use client';

import {Button} from '../../../components/button';
import {experimental_useFormStatus as useFormStatus} from 'react-dom';

export const SubmitButton = () => {
  const {pending} = useFormStatus();

  return (
    <Button
      type="submit"
      text="Anmelden"
      variant="primary"
      className="float-right"
      loading={pending}
    />
  );
};
