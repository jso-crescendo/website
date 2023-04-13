import {FormLabel} from './form-label';
import {forwardRef} from 'react';

interface TextAreaProps {
  label: string;
  errorMessage?: string;
}

type Props = TextAreaProps &
  React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >;

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({label, errorMessage, id, required, ...inputProps}, ref) => (
    <div className="mb-6">
      <FormLabel id={id} label={label} required={required} />
      <textarea
        {...inputProps}
        id={id}
        ref={ref}
        required={required}
        className="block w-full rounded-lg border border-neutral-300  bg-neutral-50 p-2.5 text-sm text-neutral-900 focus:border-primary-main focus:ring-primary-main"
      />
      {errorMessage && (
        <span className="ml-2 text-sm text-error">{errorMessage}</span>
      )}
    </div>
  ),
);
