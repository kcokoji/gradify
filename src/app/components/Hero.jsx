import Link from "next/link";
import "animate.css";

export default function Hero() {
  return (
    <>
      <div className="relative isolate px-13 pt-14 lg:px-10 ">
        <div className="mx-auto max-w-2xl   p-8 pt-20">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              New features coming soon.
              <Link
                href="#subscribe"
                className="font-semibold text-green-700 pl-1"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                Subscribe <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900  sm:text-5xl animate__fadeInDown animate__animated">
              Your Academic Companion.
            </h1>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl animate__animated animate__fadeInDown animate__delay-1s">
              Achieve Success,
            </h1>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl animate__animated animate__fadeInDown animate__delay-2s">
              One Step at a Time.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Are you a university student striving for academic success? Look
              no further!{" "}
              <span className="text-2xl font-bold text-green-700">Gradify</span>{" "}
              is here to simplify your academic journey. Calculate your GPA with
              ease, stay organized, and reach your academic goals effortlessly.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/sign-up"
                className="rounded-2xl bg-green-700 px-3.5 py-2.5 text-md font-semibold  text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 hover:shadow-xl transition ease-in-out delay-110 hover:-translate-y-1 hover:scale-110 duration-300 "
              >
                Get started <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
