"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon, Bars2Icon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
  { name: "Features", href: "/#features" },
  { name: "Calculator", href: "/login" },
  { name: "Feedback", href: "/#feedback" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white inset-x-0 top-0 z-50 fixed shadow-sm">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Gradify</span>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl text-green-700">
              Gradify
            </h1>
          </Link>
        </div>
        <div className="lg:hidden flex flex-1 justify-end mr-2">
          <Link
            href="/login"
            className="rounded-xl hover:bg-green-700 px-3 py-2 text-sm font-semibold text-green-700 hover:text-white hover:shadow-xl border-2 border-green-700"
          >
            Log In <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        <div className="lg:hidden">
          <button
            type="button"
            className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-8 w-8" aria-hidden="true" />
            ) : (
              <Bars2Icon className="h-8 w-8" aria-hidden="true" />
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-bold leading-6 text-gray-700 hover:text-green-700 hover:border-b hover:border-green-700"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/login"
            className="rounded-xl hover:bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-green-700 hover:text-white hover:shadow-xl border-2 border-green-700"
          >
            Login <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>

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
            className="fixed inset-y-0 right-0 z-50 w-4/5 bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
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
                <div className="py-6">
                  <Link
                    href="/sign-up"
                    className="-mx-3 block rounded-xl px-3 py-2.5 text-lg font-medium leading-7 text-white hover:bg-opacity-80 hover:text-white text-center bg-green-700 mt-2 border-green-700"
                  >
                    Get Started
                  </Link>

                  <Link
                    href="/login"
                    className="-mx-3 block rounded-xl px-3 py-2.5 text-lg font-medium leading-7 text-green-700  hover:bg-opacity-90 text-center border mt-2 border-green-700 bg-white"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
