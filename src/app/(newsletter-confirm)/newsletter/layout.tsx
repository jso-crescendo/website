import {ContentContainer} from '../../../components/contentContainer';

export default async function Layout(props: {
  children: React.ReactNode;
  form: React.ReactNode;
}) {
  return (
    <ContentContainer>
      <div className="flex justify-center">{props.children}</div>
    </ContentContainer>
  );
}
