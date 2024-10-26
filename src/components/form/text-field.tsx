import classNames from 'classnames';
import {FormLabel} from './form-label';
import {forwardRef} from 'react';

interface TextFieldProps {
  label: string;
  errorMessage?: string;
  hint?: string;
}

type Props = TextFieldProps &
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;

export const TextField = forwardRef<HTMLInputElement, Props>(
  (
    {label, errorMessage, hint, id, required, className, ...inputProps},
    ref,
  ) => (
    <div className={classNames('mb-6', className)}>
      <FormLabel id={id} label={label} required={required} />
      {hint && <span className="text-sm text-neutral-600">{hint}</span>}
      <input
        {...inputProps}
        id={id}
        ref={ref}
        required={required}
        className=" mt-2 block w-full rounded-lg border border-neutral-300  bg-neutral-50 p-2.5 text-sm text-neutral-900 focus:border-primary-main focus:ring-primary-main"
      />
      {errorMessage && (
        <span className="ml-2 text-sm text-error-main">{errorMessage}</span>
      )}
    </div>
  ),
);
