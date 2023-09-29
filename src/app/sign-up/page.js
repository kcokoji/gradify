"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

export default function SignUp() {
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const session = useSession();
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/dashboard");
    }
  });

  const registerUser = async (e) => {
    e.preventDefault();
    setIsCreatingAccount(true);

    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Account has been registered!");
        // Redirect to the login page
        router.push("/login");
      })
      .catch(() => toast.error("Account already exists"))
      .finally(() => {
        // Re-enable the button and restore its text
        setIsCreatingAccount(false);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      {/* Sign-up component */}
      <div className="bg-white mx-auto max-w-2xl sm:max-w-2xl px-6 py-10 lg:px-8 rounded-xl">
        <div className="mx-auto max-w-2xl text-start">
          <div>
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Gradify</span>
              <h1 className=" font-bold tracking-tight text-3xl text-green-700">
                Gradify
              </h1>
            </Link>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">
              Create An Account
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 ">
              Ready to Supercharge Your Academic Journey?, Let&#39;s get
              started.
            </p>
          </div>
        </div>
        <form
          onSubmit={registerUser}
          className="mx-auto mt-8 max-w-xl sm:mt-15"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <div className="mt-2.5">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Username
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="block w-full rounded-md border px-3.5 py-2 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
                  required
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  placeholder="Username"
                />
              </div>
              <div className="mt-2.5 relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border px-3.5 py-2 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
                  required
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  placeholder="Email Address"
                />
              </div>
              <div className="mt-2.5 relative">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="flex">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    autoComplete="none"
                    className="block w-full rounded-md border px-3.5 py-2 pr-10 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
                    required
                    value={data.password}
                    onChange={(e) =>
                      setData({ ...data, password: e.target.value })
                    }
                    placeholder="Password"
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center cursor-pointer"
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="w-6 h-6 text-gray-400 mt-6" />
                    ) : (
                      <EyeIcon className="w-6 h-6 text-gray-400 mt-6" />
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full  rounded-md bg-green-700 px-3.5 py-3 text-center text-md font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              disabled={isCreatingAccount} // Use the state variable to disable the button
            >
              {isCreatingAccount ? (
                <div className="flex items-center justify-center">
                  <svg
                    aria-hidden="true"
                    className="w-3 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  Processing...
                </div>
              ) : (
                "Create Account"
              )}
            </button>
          </div>
        </form>
        <p className="mt-2 text-lg leading-8 text-gray-600 ">
          Already have an account?{" "}
          <Link href="/login" className="underline hover:text-green-700">
            Log in
          </Link>
        </p>
        <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            type="submit"
            className="rounded-xl w-full text-center py-3 text-md font-semibold text-black  border  hover:bg-gray-100"
            onClick={() => signIn("google")}
          >
            <Image
              src="/images/google.svg"
              width={20}
              height={20}
              alt="google svg"
              className="inline pr-1 mb-0.5"
            />
            Continue with Google
          </button>
          <div className="h-18 min-h-[1em] w-px hidden sm:flex self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"></div>
          <button
            type="submit"
            className="rounded-xl w-full text-center py-3 text-md font-semibold text-black border hover:bg-gray-100"
            onClick={() => signIn("facebook")}
          >
            <Image
              src="/images/facebook.svg"
              width={20}
              height={20}
              alt="google svg"
              className="inline pr-1 mb-0.5"
            />
            Continue with Facebook
          </button>
        </div>
      </div>

      {/* Image column (displayed on large screens) */}
      <div className="lg:flex justify-center items-center hidden p-10">
        <Image
          src="/images/signupsvg.svg"
          alt="students image"
          width={800}
          height={800}
        />
      </div>
    </div>
  );
}
