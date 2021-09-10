import React from 'react';
import Link from 'next/link';
import { StrongLink } from 'styles/GlobalUtils';

export default function LogoutButton() {
  return (
    <Link href="/api/auth/logout" passHref>
      <StrongLink>Logout</StrongLink>
    </Link>
  );
}
