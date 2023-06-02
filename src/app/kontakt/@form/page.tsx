import {StatusCard} from '../../../components/status-card';
import {SubmitButton} from './submit-button';
import {TextArea} from '../../../components/form/text-area';
import {TextField} from '../../../components/form/text-field';
import {TurnstileWidget} from '../../../components/turnstile-widget';
import {createContactRequest} from '../../../firebase';
import {redirect} from 'next/navigation';
import { sanitize } from '../../../utils/escape';
import {validateToken} from '../../../utils/turnstile';

export default function ContactForm({
  searchParams,
}: {
  searchParams: {[key: string]: string | string[] | undefined};
}) {
  async function submitContactRequest(data: FormData) {
    'use server';
    const token = data.get('cf-turnstile-response')?.toString();
    if (!token || !(await validateToken(token))) {
      throw new Error('turnstile token not valid');
    }

    const name = sanitize(data.get('name')?.toString())!;
    const email = sanitize(data.get('email')?.toString())!;
    const message = sanitize(data.get('message')?.toString())!;

    if (!name || !message) {
      throw new Error('missing data');
    }
    
    await createContactRequest({name, email, message});
    redirect('/kontakt?ok');
  }

  if (Object.keys(searchParams).includes('ok')) {
    return (
      <StatusCard
        intent="success"
        title="Erfolg"
        message="Vielen Dank für deine Nachricht."
      />
    );
  }

  return (
    <form
      name="kontaktformular"
      className="w-full rounded-lg p-4 shadow-md lg:w-1/2"
      action={submitContactRequest}
    >
      <legend className="pb-4 font-serif text-2xl">Kontaktformular</legend>
      <TextField id="name" name="name" label="Name" required />
      <TextField id="email" type="email" name="email" label="Email" />
      <TextArea
        id="message"
        name="message"
        label="Nachricht"
        rows={5}
        required
      />
      <div className="my-2 flex justify-center">
        <TurnstileWidget id="contact-form" />
      </div>
      <SubmitButton />
    </form>
  );
}
