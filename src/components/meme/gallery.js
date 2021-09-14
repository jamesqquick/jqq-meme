import React from 'react';
import useSWR from 'swr';
import Image from 'next/image';
import styled from 'styled-components';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function MemeGallery() {
  const { data: memes, error } = useSWR('/api/memes', fetcher);

  if (error) {
    return <p>Something's not right!</p>;
  }
  if (!memes) return <p>Loading...</p>;
  return (
    <>
      <h2>Recent Memes</h2>
      <StyledMemes>
        {memes.map((meme) => (
          <Image
            width={480}
            height={270}
            key={meme.id}
            src={meme.imageURL}
            alt={meme.title}
          />
        ))}
      </StyledMemes>
    </>
  );
}

const StyledMemes = styled.div`
  display: grid;
  img {
    border: 4px solid black;
  }
`;
