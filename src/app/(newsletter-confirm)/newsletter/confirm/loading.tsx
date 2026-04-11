import {Spinner} from '@/icons/spinner';

export default function Loading() {
  return (
    <div>
      <Spinner className="m-4 mx-auto size-12 animate-spin" />
      <p>Code wird überprüft</p>
    </div>
  );
}
