import Image from 'next/image';
import Link from 'next/link';

interface IBlogCard {
  title: string;
  date: string;
  metaTitle: string;
  imageURL: string;
  slug: string;
  height: number;
  width: number;
  authors: Array<string>;
}

export default function BlogCard({
  title,
  date,
  metaTitle,
  imageURL,
  slug,
  height,
  width,
  authors,
}: IBlogCard) {

  return (
    <Link href={`/${slug}`}>
      <div>
        <h1>{title}</h1>
          <Image
            alt={metaTitle}
            src={`/${imageURL}`}
            height={height}
            width={width}
          />
          <p>{authors && authors.join(', ')}</p>
          <p>{date}</p>
      </div>
    </Link>
  );
}
