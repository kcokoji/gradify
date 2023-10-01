"use client";

import { Fragment, useRef, useState } from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { signOut } from "next-auth/react";

export default function Example() {
  const { data: session } = useSession();

  const [open, setOpen] = useState(true);
  const router = useRouter();

  const cancelButtonRef = useRef(null);

  const closeDialog = () => {
    setOpen(false);
  };

  //Function for deleting user

  const deleteUser = async () => {
    const userEmail = session?.user?.email;
    const payload = { userEmail };

    axios
      .delete("/api/register/delete", {
        data: payload, // Send the payload in the request body
        headers: {
          "Content-Type": "application/json", // Specify content type as JSON
        },
      })
      .then(() => {
        signOut({ callbackUrl: "/" });
      })
      .catch((err) => {
        toast.error("Error Deleting User");
        console.log(err);
      });
  };

  return (
    <Fragment>
      {open && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75">
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon
                        className="h-6 w-6 text-red-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3 className="text-base font-semibold leading-6 text-gray-900">
                        Are you sure you want to delete your account?
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={deleteUser}
                  >
                    Yes
                  </button>

                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => {
                      router.push("/dashboard");
                      closeDialog(); // Close the dialog on cancel
                    }}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
