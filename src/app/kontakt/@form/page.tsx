import {Button} from '../../../components/button';
import Script from 'next/script';
import {StatusCard} from '../../../components/status-card';
import {SubmitButton} from './submit-button';
import {TextArea} from '../../../components/form/text-area';
import {TextField} from '../../../components/form/text-field';
import {TurnstileWidget} from '../../../components/turnstile-widget';
import {redirect} from 'next/navigation';

/*
interface FormData {
  name: string;
  email?: string;
  message: string;
}
*/

export default function ContactForm({
  searchParams,
}: {
  searchParams: {[key: string]: string | string[] | undefined};
}) {
  async function submitContactRequest(data: FormData) {
    'use server';
    /*
    {"$ACTION_ID_de1bd1ff1ba0d5196652620db8ba566d996ccd88":"",
    "name":"hjkhjk",
    "email":"",
    "message":"jkhkjh",
    "cf-turnstile-response":"XXXX.DUMMY.TOKEN.XXXX"}
    */
    console.log(JSON.stringify(Object.fromEntries(data)));

    await new Promise((resolve) => setTimeout(resolve, 2000));
    //throw new Error('ups');
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
