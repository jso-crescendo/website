import {Error} from '../icons/error';
import {Info} from '../icons/info';
import classNames from 'classnames';

export const StatusCard: React.FC<{
  intent: 'success' | 'error';
  title: string;
  message: string | React.ReactNode;
}> = ({intent, title, message}) => (
  <div
    className={classNames(
      'flex w-full flex-row items-center gap-4 rounded-lg p-4 text-background shadow-md md:p-8 lg:w-1/2',
      {
        'bg-success-darker': intent === 'success',
        'bg-error-lighter ': intent === 'error',
      },
    )}
  >
    {
      {
        success: <Info className="m-2 h-14" />,
        error: <Error className="m-2 h-14" />,
      }[intent]
    }
    <div>
      <h3 className="pb-2 font-serif text-2xl">{title}</h3>
      <p className="text-base">{message}</p>
    </div>
  </div>
);
