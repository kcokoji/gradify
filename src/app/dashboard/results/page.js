import { getServerSession } from "next-auth";
import axios from "axios";
import Link from "next/link";
import ResultFolder from "../components/result-folder";
import prisma from "@/app/libs/prismaDB";

export default async function ResultSaver() {
  const session = await getServerSession();
  const userEmail = session?.user?.email;

  const result = await prisma.resultFolder.findMany({
    where: { userEmail },
  });

  return (
    <div className="bg-white px-6 py-12 sm:py-24 lg:px-8 max-w-xl mx-auto sm:border border-green-700 my-10 rounded-md">
      <div className="max-w-2xl text-center mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Result Folders
        </h2>
      </div>
      <div className="flex justify-center items-center">
        <Link
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600 max-w-2xl mx-auto mt-4 inline-block"
          href="/dashboard/create"
        >
          Create a Folder
        </Link>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Your Result Folders:</h2>

        {result.length==0 ? (
          <p className="mt-2 text-gray-500">No result folders found.</p>
        ) : (
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 px-6 gap-4">
            {result.map((folder) => (
              <ResultFolder key={folder.id} folder={folder} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
