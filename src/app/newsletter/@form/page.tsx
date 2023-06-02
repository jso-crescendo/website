import {StatusCard} from '../../../components/status-card';
import {SubmitButton} from './submit-button';
import {TextField} from '../../../components/form/text-field';
import {TurnstileWidget} from '../../../components/turnstile-widget';
import {createSignupRequest} from '../../../firebase/email-signup';
import {redirect} from 'next/navigation';
import {sanitize} from '../../../utils/escape';
import {validateToken} from '../../../utils/turnstile';

export default function ContactForm({
  searchParams,
}: {
  searchParams: {[key: string]: string | string[] | undefined};
}) {
  async function submitSignupRequest(data: FormData) {
    'use server';
    const token = data.get('cf-turnstile-response')?.toString();
    if (!token || !(await validateToken(token))) {
      throw new Error('turnstile token not valid');
    }

    const name = sanitize(data.get('name')?.toString())!;
    const email = sanitize(data.get('email')?.toString())!;

    if (!name || !email) {
      throw new Error('missing data');
    }

    await createSignupRequest({name, email});
    redirect('/newsletter?ok');
  }

  if (Object.keys(searchParams).includes('ok')) {
    return (
      <StatusCard
        intent="success"
        title="Anmeldung erfolgreich"
        message="Sie erhalten in Kürze eine Bestätigungsemail"
      />
    );
  }

  return (
    <form
      name="newsletterFormular"
      className="w-full rounded-lg p-4 shadow-md lg:w-1/2"
      action={submitSignupRequest}
    >
      <legend className="pb-4 font-serif text-2xl">Anmeldung Newsletter</legend>
      <TextField id="name" name="name" label="Name" required />
      <TextField id="email" type="email" name="email" label="Email" required />
      <div className="my-2 flex justify-center">
        <TurnstileWidget id="newsletter-form" />
      </div>
      <SubmitButton />
    </form>
  );
}
