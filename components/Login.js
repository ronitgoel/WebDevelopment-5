'use client'
import * as React from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Login() {
    const [email, setemail] = React.useState("");
    const [password, setpassword] = React.useState("");
    const [error, seterror] = React.useState("");
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await signIn("credentials", {
                email, password, redirect: false,
            });
            if (res.error)
            {
                seterror("Invalid Credentials");
                return;
            }
            router.replace("/");
        } catch (error) {
            console.log(error);
        }
    }
  return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8" style = {{backgroundImage: 'url("https://i.pinimg.com/originals/4d/96/08/4d9608e972721c62bc888af8d4531747.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',}}>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <div className = "text-center"><Link className = "text-5xl font-black text-orange-600 hover:text-amber-400" href="/">DEVCART</Link></div>
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Enter Your Details</h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="email" className="block text-sm font-bold leading-6 text-gray-900">Email address</label>
                        <div className="mt-2">
                        <input onChange={(e) => setemail(e.target.value)} placeholder=" Email" id="email" name="email" type="email" autoComplete="email" required className="indent-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-bold leading-6 text-gray-900">Password</label>
                        </div>
                        <div className="mt-2">
                        <input onChange={(e) => setpassword(e.target.value)} placeholder=" password" id="password" name="password" type="password" autoComplete="current-password" required className="indent-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                        </div>
                    </div>
                    {
                        error && (
                            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                                {error}
                            </div>
                        )
                    }
                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login To Your Account</button>
                    </div>
                </form>
                <p className="font-bold mt-10 text-center text-lg text-black">
                    Do not have an account?
                    <Link href="./Signup" className="font-bold leading-6 bg-yellow-400 text-pink-600 hover:text-blue-800"> Register Yourself</Link>
                </p>
            </div>
    </div>
  )
}