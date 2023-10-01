"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import Link from "next/link";

export default function Results({ params: { Id } }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/api/results/${Id}`)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch(() => {
        toast.error("Error Fetching Results");
      });
  }, [Id]); // Include Id in the dependency array

  return (
    <div className="max-h-screen py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className="text-sm font-medium text-gray-500"
          aria-label="Breadcrumb"
        >
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link
                className="text-gray-400 hover:text-gray-600"
                href="/dashboard"
              >
                Dashboard
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
              <Link
                className="text-gray-400 hover:text-gray-600"
                href="/dashboard/results"
              >
                Results Folder
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li className="flex items-center">
              <span className="text-gray-700" aria-current="page">
                Results
              </span>
            </li>
          </ol>
        </nav>

        <div className="text-3xl mt-4">
          {isLoading ? (
            <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-700"></div>
            </div>
          ) : (
            <div>
              {data.resultFolder.map((folder) => (
                <div key={folder.id} className="p-4 border rounded mb-4">
                  <h4 className="text-lg font-semibold">
                    Result Folder Name:{" "}
                    <span className="text-lg text-gray-700 font-medium">
                      {folder.name}
                    </span>
                  </h4>

                  {folder.semesters.map((semester) => (
                    <div key={semester.id} className="mt-4">
                      <h4 className="text-lg font-semibold">
                        Semester Name:{" "}
                        <span className="text-lg font-medium text-gray-700">
                          {semester.name}
                        </span>
                      </h4>

                      <div className="overflow-x-auto mt-5">
                        <table className="w-full table-auto">
                          <thead>
                            <tr>
                              <th className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase border border-gray-200">
                                Subject Name
                              </th>
                              <th className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase border border-gray-200">
                                Grade
                              </th>
                              <th className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase border border-gray-200">
                                Code
                              </th>
                              <th className="px-2 py-1 text-left text-xs font-medium text-gray-500 uppercase border border-gray-200">
                                Unit
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {semester.subjects.map((subject) => (
                              <tr key={subject.id}>
                                <td className="px-2 py-1 text-left text-sm sm:text-md border border-gray-200">
                                  {subject.name}
                                </td>
                                <td className="px-2 py-1 text-left text-sm sm:text-md border border-gray-200">
                                  {subject.grade}
                                </td>
                                <td className="px-2 py-1 text-left  text-sm sm:text-md border border-gray-200">
                                  {subject.code}
                                </td>
                                <td className="px-2 py-1 text-left text-sm sm:text-md border border-gray-200">
                                  {subject.unit}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
