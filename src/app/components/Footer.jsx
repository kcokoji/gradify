const d = new Date();
const year = d.getFullYear();

export default function Example() {
  return (
    <div
      className="relative isolate overflow-hidden bg-green-700 py-4"
      id="subscribe"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex justify-center">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Subscribe to our newsletter.
            </h2>
            <p className="mt-4 text-md leading-8 text-white">
              Stay in the know with our daily updates on new features and
              developments! Subscribe now to receive the latest news and
              features straight to your inbox!.
            </p>

            <form
              action=""
              method="POST"
              className="mt-6 flex max-w-md gap-x-4 mb-7"
            >
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-black sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md  px-3.5 py-2.5 text-sm  border-2 border-white font-semibold text-white shadow-sm hover:bg-white hover:text-green-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <h1 className="text-center text-gray-400">
          @ {year}{" "}
          <a href="" className="underline">
            Okoji Kelechi
          </a>
          .All Rights Reserved
        </h1>
      </div>
    </div>
  );
}
