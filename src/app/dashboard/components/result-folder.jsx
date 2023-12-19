"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function ResultFolder({ folder }) {
  const router = useRouter();

  const handleDeleteFolder = async (folderId) => {
    const payload = { folderId, userEmail };

    try {
      await axios.delete(API_RESULTS_PATH, {
        data: payload,
        headers: {
          "Content-Type": "application/json",
        },
      });
      router.refresh();
      toast.success("folder deleted");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold">{folder.name}</h3>
        <p className="text-gray-500 mt-2">Created: {folder.createdAt}</p>
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
  );
}
