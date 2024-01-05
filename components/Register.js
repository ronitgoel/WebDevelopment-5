'use client'
import * as React from 'react';
import Link from 'next/link';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

export default function Register() {
    const [name, setname] = React.useState("");
    const [address, setaddress] = React.useState("");
    const [mobile, setmobile] = React.useState("");
    const [email, setemail] = React.useState("");
    const [password, setpassword] = React.useState("");
    const [error, seterror] = React.useState("");
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !address || !mobile || !email || !password)
        {
            seterror("All Field Are Necessary");
            return;
        }
        try {
          const resUserExists = await fetch("/api/userExists", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email}),
          })
          const {user} = await resUserExists.json();
          if (user)
          {
            seterror("User already Exists");
            return;
          }

          const res = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name, address, mobile, email, password,
            }),
          }) 
          if (res.ok)
          {
            seterror("");
            const form = e.target;
            form.reset();
            router.push('/SignIn');
          }
          else
          {
            console.log("User registration failed");
          }
        } catch (error) {
            console.log("Error during registration: ", error);
        }
    }
  return (
    <div style = {{backgroundImage: 'url("https://i.pinimg.com/originals/4d/96/08/4d9608e972721c62bc888af8d4531747.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',}}>
        <div className="flex flex-col lg:flex-row justify-evenly ...">
            <div className="basis-1/6"></div>
            <div className="rounded-lg basis-2/6 mt-8 ml-8 mr-8 mb-8 lg:mb-5" style = {{backgroundImage: 'url("https://i.pinimg.com/736x/5d/73/ea/5d73eaabb25e3805de1f8cdea7df4a42--tumblr-backgrounds-iphone-phone-wallpapers-iphone-wallaper-tumblr.jpg")',marginTop:'2rem'}}>
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <div className = "text-center"><Link className = "text-5xl font-black text-orange-600 hover:text-amber-400" href="/">DEVCART</Link></div>
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Enter Your Details</h2>
                    </div>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="Name" className="bg-yellow-500 text-center font-bold block text-sm leading-6 text-gray-900">Full Name</label>
                                <div className="mt-2">
                                <input onChange={(e) => setname(e.target.value)} placeholder=" Name" id="Name" name="Name" type="Name" autoComplete="Name" required className="indent-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="Name" className="bg-yellow-500 text-center font-bold block text-sm leading-6 text-gray-900">Address</label>
                                <div className="mt-2">
                                <input onChange={(e) => setaddress(e.target.value)} placeholder=" Address" id="address" name="address" type="address" autoComplete="Name" required className="indent-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="number" className="bg-yellow-500 text-center block text-sm font-bold leading-6 text-gray-900">Mobile Number</label>
                                <div className="mt-2">
                                <input onChange={(e) => setmobile(e.target.value)} placeholder=" Number" id="number" name="number" type="number" autoComplete="Name" required className="indent-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="bg-yellow-500 text-center block text-sm font-bold leading-6 text-gray-900">Email address</label>
                                <div className="mt-2">
                                <input onChange={(e) => setemail(e.target.value)} placeholder=" Email" id="email" name="email" type="email" autoComplete="email" required className="indent-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="password" className="bg-yellow-500 text-center block text-sm font-bold leading-6 text-gray-900">Password</label>
                                <div className="mt-2">
                                <input onChange={(e) => setpassword(e.target.value)} placeholder=" Password" id="password" name="password" type="password" autoComplete="current-password" required className="indent-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
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
                                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create Your Account</button>
                            </div>
                        </form>
                    </div>
                    <p className="mt-10 text-center text-sm font-bold text-black">
                       By continuing, you agree to DevCart Conditions of Use and Privacy Notice.
                    </p>
                    <p className="mt-10 text-center text-sm text-black">
                        Already have an account?
                        <Link href="./SignIn" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login To Your Account</Link>
                    </p>
                </div>
            </div>
            <div className="basis-2/6 bg-indigo-500 bg-opacity-60 rounded-2xl mt-8 ml-8 mr-8 mb-8 lg:mt-[20rem] lg:ml-[6rem]" style = {{height:'15rem'}}>
                <p className="font-bold mb-8 mt-6 lg:mt-2 text-center text-2xl text-yellow-300">
                    Login With Social Networks
                </p>
                <button onClick={() => signIn("google")} type="submit" className="flex w-full justify-center rounded-md px-3 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:text-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><GoogleIcon></GoogleIcon>Login With Google</button>
                <p className="font-bold text-center text-2xl text-orange-400">
                    OR
                </p>
                <button onClick={() => signIn("github")} type="submit" className="flex w-full justify-center rounded-md px-3 py-1.5 mb-2 text-xl font-semibold leading-6 text-white shadow-sm hover:text-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><GitHubIcon></GitHubIcon>Login With Github</button>
            </div>
            <div className="basis-1/6"></div>
        </div>

    </div>
  )
}

