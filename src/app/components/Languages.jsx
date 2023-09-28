import Image from "next/image";

export default function Languages() {
  return (
    <div className="opacity-90 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Developed,maintained and deployed using the following tehnologies
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-6 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-5 lg:mx-0 lg:max-w-none lg:grid-cols-5 ">
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 "
            src="/images/html5.svg"
            alt="Html 5"
            width={120}
            height={48}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="/images/nextjs.svg"
            alt="next js"
            width={120}
            height={48}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="/images/nodejs.svg"
            alt="node js"
            width={120}
            height={48}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="/images/tailwindcss.svg"
            alt="tailwind css "
            width={120}
            height={48}
          />
          <Image
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="/images/react.svg"
            alt="react "
            width={120}
            height={48}
          />
        </div>
      </div>
    </div>
  );
}
