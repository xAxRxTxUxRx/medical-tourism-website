import { useState } from 'react';
import { IMAGE_FALLBACK } from './data';

type Props = React.ImgHTMLAttributes<HTMLImageElement> & { src: string };

export default function MediaImage({ src, ...rest }: Props) {
  const [current, setCurrent] = useState(src);

  return (
    <img
      {...rest}
      src={current}
      onError={() => {
        const fb = IMAGE_FALLBACK[src];
        if (fb && current !== fb) setCurrent(fb);
      }}
    />
  );
}
