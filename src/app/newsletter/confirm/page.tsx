import {ContentContainer} from '../../../components/contentContainer';
import {ConfirmationForm} from './confirmation-form';

export const metadata = {
  title: 'Email bestätigen',
  robots: 'noindex',
};

export default function Confirm() {
  return (
    <ContentContainer>
      <div className="flex justify-center">
        <ConfirmationForm />
      </div>
    </ContentContainer>
  );
}
