import { useUser } from '@auth0/nextjs-auth0';
import React from 'react';
import LoginButton from './loginButton';
import LogoutButton from './logoutButton';

export default function AuthenticationButton() {
    const { user, isLoading } = useUser();

    return (
        <>
            {!user && !isLoading && <LoginButton />}
            {user && !isLoading && <LogoutButton />}
        </>
    );
}
