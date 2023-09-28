"use client";

import { useState, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon, Bars2Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Results", href: "/dashboard/results" },
  { name: "Calculator", href: "/dashboard/calculator" },
  { name: "Predictions", href: "/dashboard/prediction" },
];

export default function DashboardNavbar(prop) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white inset-x-0 top-0  shadow-sm">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 z-50">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleMobileMenu}
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars2Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
            <div className="flex flex-shrink-0 justify-start">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Gradify</span>
                <h1 className="text-3xl font-bold tracking-tight ml-12 text-green-700 sm:mr-10">
                  Gradify
                </h1>
              </Link>
            </div>
            <div className="hidden  sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="
                       text-black hover:text-green-700
                     px-3 py-2 text-sm font-medium"
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="relative inline-block text-left">
            {/* Profile dropdown */}
            <Menu as="div" className="relative">
              <div>
                <Menu.Button className="flex items-center space-x-2 sm:m-0 m-2">
                  {prop.image ? (
                    <Image
                      className="h-10 w-10 rounded-md "
                      src={prop.image}
                      alt="User Image"
                      width={20}
                      height={20}
                    />
                  ) : (
                    <span className="h-12 w-12 rounded-md border-2 border-gray-500 flex items-center justify-center text-gray-700 font-bold text-xl">
                      {prop.name.slice(0, 1)}
                    </span>
                  )}
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 w-80 mt-2  origin-top-right rounded-md bg-white py-1 shadow-lg  focus:outline-none">
                  <Menu.Item>
                    <div className="flex items-center space-x-4 p-3">
                      {prop.image ? (
                        <Image
                          className="h-15 w-15 rounded-md "
                          src={prop.image}
                          alt="User Image"
                          width={50}
                          height={50}
                        />
                      ) : (
                        <span className="h-13 w-13 rounded-md border-2 border-gray-500 flex items-center justify-center text-gray-700 font-bold text-xl">
                          <h1 className="p-7"> {prop.name.slice(0, 1)}</h1>
                        </span>
                      )}
                      <div>
                        <h1 className="block text-md sm:text-sm font-medium text-gray-700 ">
                          {prop.name}
                        </h1>
                        <span className="text-md sm:text-sm text-gray-500">
                          {prop.email}
                        </span>
                      </div>
                    </div>
                  </Menu.Item>
                  <hr />
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/dashboard/profile"
                        className={`${
                          active ? "bg-gray-100" : ""
                        } block px-4 py-2 text-sm text-black`}
                      >
                        Your Profile
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="#"
                        className={`${
                          active ? "bg-gray-100" : ""
                        } block px-4 py-2 text-sm text-black`}
                      >
                        Settings
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/dashboard/signout"
                        className={`${
                          active ? "bg-gray-100" : ""
                        } block px-4 py-2 text-sm text-black`}
                      >
                        Sign out
                      </Link>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-gray-800 opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            onClick={toggleMobileMenu}
            transition={{ duration: 0.3 }}
          />
        )}
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-y-0 left-0 z-50 w-4/5 bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Gradify</span>
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl text-green-700">
                  Gradify
                </h1>
              </Link>

              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block  px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:text-green-700 border-b"
                      onClick={toggleMobileMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
