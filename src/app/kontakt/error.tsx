'use client';

import { EmailLink } from '../../components/email-link';
import {StatusCard} from '../../components/status-card';
import {useEffect} from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <StatusCard
      intent="error"
      title="Es ist ein Fehler aufgetreten"
      message={
        <>
          Bitte kontaktiere uns per{' '}
          <EmailLink email="kontakt@jso-crescendo.ch" name="Mail" />
        </>
      }
    />
  );
}
