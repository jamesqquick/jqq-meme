import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import React from 'react';
import useSWR from 'swr';
import Image from 'next/image';
import axios from 'axios';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Admin() {
  const {
    data: unapprovedMemes,
    error,
    mutate,
  } = useSWR('/api/memes/unapproved', fetcher);
  if (error) {
    return <p>Something's not right!</p>;
  }
  if (!unapprovedMemes) return <p>Loading...</p>;

  const approveOrDelete = async (e, approved, id) => {
    e.preventDefault();
    try {
      await axios.post('/api/memes/unapproved', { id, approved });
      mutate();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Admin</h1>
      {unapprovedMemes.map((meme) => (
        <>
          <Image
            width={480}
            height={270}
            key={meme.id}
            src={meme.imageURL}
            alt={meme.title}
          />
          <button
            type="button"
            onClick={(e) => approveOrDelete(e, true, meme.id)}
          >
            Approve
          </button>
          <button
            type="button"
            onClick={(e) => approveOrDelete(e, false, meme.id)}
          >
            Delete
          </button>{' '}
        </>
      ))}
    </div>
  );
}

// TODO: check for admin role
// TODO: Create api route for unapproved images

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps({ req, res }) {
    const { user } = getSession(req, res);
    if (!user.isAdmin) {
      res.statusCode = 302;
      res.setHeader('location', '/');
      res.end();
    }
    return {
      props: {},
    };
  },
});
