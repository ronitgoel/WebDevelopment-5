'use client'
import { useSession } from 'next-auth/react';
import Login from '@/components/Login';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const {data : session} = useSession();
  const router = useRouter();
    if (session)
    {
        router.push('/');
    }
    else
    {
      return (
        <Login></Login>
      )
    }
};
