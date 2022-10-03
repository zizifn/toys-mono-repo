import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function BlogPost({ data }) {
  const router = useRouter();
  const [result, setResult] = useState({});

  useEffect(() => {
    (async () => {
      const result1 = await fetch(
        `https://rickandmortyapi.com/api/character/23`
      ).then((res) => res.json());
      setResult(result1);
    })();
  }, []);

  return (
    <div>
      {router.isFallback ? (
        <h1> loading....</h1>
      ) : (
        <>
          <h1> view {data.name}</h1>
          <img src={data.image} />
          <pre>{JSON.stringify(result)}</pre>
        </>
      )}
    </div>
  );
}

export async function getStaticProps(context) {
  const { slug: count } = context.params;
  console.log('+++++++++++');

  const data = await fetch(
    `https://rickandmortyapi.com/api/character/${count}`
  ).then((res) => res.json());

  return {
    props: {
      data,
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          slug: '1',
        },
      },
      {
        params: {
          slug: '2',
        },
      },
      {
        params: {
          slug: '3',
        },
      },
    ],
    fallback: true,
  };
}
