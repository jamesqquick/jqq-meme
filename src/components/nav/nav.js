import React from 'react';
import styled from 'styled-components';
import { StrongLink } from 'styles/GlobalUtils';
import Link from 'next/link';
import AuthenticationButton from 'components/auth/authenticationButton';
import { useUser } from '@auth0/nextjs-auth0';

export default function Nav() {
  const { user } = useUser();
  return (
    <StyledNav>
      <Link href="/" passHref>
        <StrongLink>Home</StrongLink>
      </Link>
      <Link href="/generator" passHref>
        <StrongLink>Meme Generator</StrongLink>
      </Link>
      <AuthenticationButton />
      {user?.isAdmin && (
        <Link href="/admin" passHref>
          <StrongLink>Admin</StrongLink>
        </Link>
      )}
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  background: url('/images/red-header.png') center bottom no-repeat;
  background-size: cover;
  display: block;
  height: 400px;
  width: 100%;
  margin-bottom: -300px;
`;
