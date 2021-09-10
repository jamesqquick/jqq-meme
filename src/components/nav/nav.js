import React from 'react';
import styled from 'styled-components';
import { StrongLink } from 'styles/GlobalUtils';
import Link from 'next/link';
import AuthenticationButton from 'components/auth/authenticationButton';

export default function Nav() {
  return (
    <StyledNav>
      <Link href="/" passHref>
        <StrongLink>Home</StrongLink>
      </Link>
      <Link href="/generator" passHref>
        <StrongLink>Meme Generator</StrongLink>
      </Link>
      <AuthenticationButton />
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
