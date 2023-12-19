"use client";

import { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Example() {
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const { data: session } = useSession();

  const router = useRouter();

  const [rows, setRows] = useState([
    { input1: "", input2: "", select1: "1", select2: "A" },
  ]);

  const addRow = () => {
    setRows([...rows, { input1: "", input2: "", select1: "1", select2: "A" }]);
  };

  const deleteRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setIsCreatingAccount(true);

    // Extract the data you want to send to the API
    const formData = {
      folderName: e.target["folder-name"].value,
      userEmail: session?.user?.email,
      semesterName: e.target["semester-name"].value,
      subjects: rows.map((row) => ({
        name: row.input1,
        code: row.input2,
        unit: row.select1,
        grade: row.select2,
      })),
    };

    axios
      .post("/api/results", formData)
      .then(() => {
        toast.success("Result Sucessfully saved");
        // Redirect to the result page
        router.refresh();
        router.push("/dashboard/results");
      })
      .catch(() => toast.error("Error Saving results"))
      .finally(() => {
        // Re-enable the button and restore its text
        setIsCreatingAccount(false);
      });
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-12 lg:px-8 sm:max-w-3xl max-w-xl mx-auto sm:border border-green-700 my-10 rounded-md">
      {session ? (
        <>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Result Folder Form
            </h2>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 max-w-xl sm:mt-12"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="folder-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Folder Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="folder-name"
                    id="folder-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="semester-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Semester
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="semester-name"
                    id="last-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="mt-10 overflow-x-scroll">
              <table className="min-w-full border-collapse divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Subject
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Code
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Unit
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Grade
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {rows.map((row, index) => (
                    <tr key={index}>
                      <td className="px-2 py-4 whitespace-nowrap">
                        <input
                          type="text"
                          value={row.input1}
                          onChange={(e) =>
                            handleInputChange(index, "input1", e.target.value)
                          }
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                          required
                        />
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap">
                        <input
                          type="text"
                          value={row.input2}
                          onChange={(e) =>
                            handleInputChange(index, "input2", e.target.value)
                          }
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                          required
                        />
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap">
                        <select
                          value={row.select1}
                          onChange={(e) =>
                            handleInputChange(index, "select1", e.target.value)
                          }
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                          required
                        >
                          {Array.from({ length: 10 }, (_, i) => (
                            <option key={i} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap">
                        <select
                          value={row.select2}
                          onChange={(e) =>
                            handleInputChange(index, "select2", e.target.value)
                          }
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                          required
                        >
                          {Array.from({ length: 6 }, (_, i) => (
                            <option key={i} value={String.fromCharCode(65 + i)}>
                              {String.fromCharCode(65 + i)}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          type="button"
                          onClick={() => deleteRow(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <TrashIcon className="h-6 w-6" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                type="button"
                onClick={addRow}
                className="mt-4 bg-green-600 px-3.5 py-3 text-center text-md font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 rounded-md"
              >
                Add Subject
              </button>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="block w-full rounded-md bg-green-700 px-3.5 py-3 text-center text-md font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
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
                  "Save Result"
                )}
              </button>
            </div>
          </form>
        </>
      ) : (
        <>
          <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-700"></div>
          </div>
        </>
      )}
    </div>
  );
}
