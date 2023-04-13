import {FormLabel} from './form-label';
import {forwardRef} from 'react';

interface TextFieldProps {
  label: string;
}

type Props = TextFieldProps &
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;

export const TextField = forwardRef<HTMLInputElement, Props>(
  ({label, id, required, ...inputProps}, ref) => (
    <div className="mb-6">
      <FormLabel id={id} label={label} required={required} />
      <input
        {...inputProps}
        id={id}
        ref={ref}
        required={required}
        className="block w-full rounded-lg border border-neutral-300  bg-neutral-50 p-2.5 text-sm text-neutral-900 focus:border-primary-main focus:ring-primary-main"
      />
    </div>
  ),
);
