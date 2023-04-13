interface Props{
  id?: string;
  label: string;
  required?: boolean
}

export const FormLabel: React.FC<Props> = ({
  id,
  label,required
}) => (
  <label
    htmlFor={id}
    className="mb-2 block font-sans text-on-background"
  >
    {label}{required && <span className="text-error">*</span>}
  </label>
);
