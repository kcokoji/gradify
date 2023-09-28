import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

import Link from "next/link";

export default async function Example() {
  const session = await getServerSession(authOptions);

  return (
    <div className="p-4 sm:px-0 max-w-2xl mx-auto relative">
      <h1 className="mt-1 max-w-2xl text-3xl text-center">Personal details</h1>

      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Full name
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700">
              {session?.user.name}
            </dd>
          </div>

          <div className="px-4 py-6">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Email address
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700">
              {session?.user?.email}
            </dd>
          </div>

          <div className="px-4 py-6">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              About
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
              incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
              consequat sint. Sit id mollit nulla mollit nostrud in ea officia
              proident. Irure nostrud pariatur mollit ad adipisicing
              reprehenderit deserunt qui eu.
            </dd>
          </div>
        </dl>
      </div>

      {/* Delete Account Button */}
      <div className="absolute bottom-2 right-4">
        <Link
          href="/dashboard/profile/delete"
          className="px-4 py-2 text-sm font-medium text-red-600 border border-red-600 rounded-md hover:bg-red-600 hover:text-white transition duration-300 ease-in-out"
        >
          Delete Account
        </Link>
      </div>
    </div>
  );
}
