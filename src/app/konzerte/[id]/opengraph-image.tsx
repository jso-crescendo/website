import {ImageResponse} from 'next/og';
import {Logo} from '@/icons/logo';
import {promises as fs, existsSync} from 'fs';
import path from 'path';
import {getConcert} from '@/data/concerts';

export default async function Image(props: {params: Promise<{id: string}>}) {
  const params = await props.params;
  const concert = getConcert(params.id);

  if (concert && concert.openGraphImage) {
    const filePath = path.join(
      process.cwd(),
      `src/data/concerts/${concert.openGraphImage.year}/${concert.id}/assets/${concert.openGraphImage.name}.png`,
    );
    try {
      const fileContents = await fs.readFile(filePath);
      const base64 = Buffer.from(fileContents).toString('base64');
      const base64DataUrl = `data:image/png;base64,${base64}`;

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
              color: '#212121',
            }}
          >
            <img src={base64DataUrl} height="100%" />
          </div>
        ),
      );
    } catch (error) {
      console.error(error);
    }
  }

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
          color: '#212121',
        }}
      >
        <Logo noTitle={true} width={1000} />
      </div>
    ),
  );
}
