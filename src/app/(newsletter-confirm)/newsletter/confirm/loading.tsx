import {Spinner} from '../../../../icons/spinner';

export default function Loading() {
  return (
    <div>
      <Spinner className="m-4 mx-auto h-12 w-12 animate-spin" />
      <p>Code wird überprüft</p>
    </div>
  );
}
