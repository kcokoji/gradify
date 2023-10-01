"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { TrashIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";

export default function ResultSaver() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      axios
        .get("/api/results")
        .then((response) => {
          const userData = response.data.find(
            (user) => user.email === session.user.email
          );
          if (userData) {
            setResult(userData.resultFolder);
            setLoading(false);
          }
        })
        .catch(() => {
          toast.error("Error finding results");
        });
    }
  }, [session]);

  const handleDeleteFolder = async (folderId) => {
    const payload = { folderId, userEmail: session?.user?.email };

    axios
      .delete("/api/results/", {
        data: payload,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        setResult(result.filter((folder) => folder.id !== folderId));
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
        {loading ? (
          <div className="flex justify-center items-center mt-4">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-700"></div>
          </div>
        ) : result === null ? (
          <p className="mt-2 text-gray-500">No result folders found.</p>
        ) : (
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 px-6  gap-4">
            {result.map((folder) => (
              <div
                key={folder.id}
                className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold">{folder.name}</h3>
                  <p className="text-gray-500 mt-2">
                    Created: {folder.createdAt}
                  </p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <Link
                    className="text-green-700 hover:underline"
                    href={`/dashboard/results/${folder.id}`}
                  >
                    View Results
                  </Link>
                  <button
                    onClick={() => handleDeleteFolder(folder.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    <TrashIcon className="h-6 w-6" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
