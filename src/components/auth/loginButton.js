import React from 'react';
import Link from 'next/link';
import { StrongLink } from 'styles/GlobalUtils';

export default function LoginButton({ text = 'Login' }) {
    return (
        <Link href="/api/auth/login" passHref>
            <StrongLink>{text}</StrongLink>
        </Link>
    );
}
