'use client'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Register from '@/components/Register';

export default function SignUp() {
  const {data : session} = useSession();
  const router = useRouter();
    if (session)
    {
        router.push('/');
    }
    else
    {
      return (
        <Register></Register>
      )
    }
};
