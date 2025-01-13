import {ImageResponse} from 'next/og';
import {Logo} from '@/icons/logo';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fdfdfd',
          color: "#212121"
        }}
      >
        <Logo noTitle={true} width={1000}/>
      </div>
    )
  );
}
