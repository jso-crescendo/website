interface EmailLinkProps {
  email: string;
  name?: string;
}
export const EmailLink: React.FC<EmailLinkProps> = ({email, name}) => (
  <a
    href={`mailto:${email}`}
    className="text-primary-main hover:text-primary-darker text-nowrap"
  >
    {name ? (
      <>
        {name} ({email})
      </>
    ) : (
      email
    )}
  </a>
);
