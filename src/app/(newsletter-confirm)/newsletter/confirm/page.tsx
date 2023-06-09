import {StatusCard} from '../../../../components/status-card';
import {confirmCode} from '../../../../firebase/email-signup';

export const metadata = {
  title: 'Email bestätigen',
  robots: 'noindex',
};

export default async function Confirm({
  searchParams,
}: {
  searchParams: {[key: string]: string | string[] | undefined};
}) {
  const code = searchParams['code'];
  if (!code || !(await confirmCode(code.toString()))) {
    return (
      <StatusCard
        intent="error"
        title="Es ist ein Fehler aufgetreten"
        message="Möglicherweise ist der Code ungültig oder Sie haben ihre Email bereits bestätigt."
      />
    );
  }

  return (
    <StatusCard
      intent="success"
      title="Bestätigung erfolgreich"
      message="Email erfolgreich bestätigt. Sie erhalten in Zukunft unseren Newsletter
          direkt in Ihr Postfach"
    />
  );
}
