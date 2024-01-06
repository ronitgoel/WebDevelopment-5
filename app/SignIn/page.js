'use client'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Login from '@/components/Login';

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
