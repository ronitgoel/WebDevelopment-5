'use client'
import { useSession } from 'next-auth/react';
import Register from '@/components/Register';
import { useRouter } from 'next/navigation';

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
