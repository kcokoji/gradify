"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Something went wrong!
        </h2>
        <button
          onClick={() => reset()} // Attempt to recover by trying to re-render the segment
          className="px-4 py-2 bg-green-700 hover:bg-green-600 text-white font-semibold rounded-md"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
