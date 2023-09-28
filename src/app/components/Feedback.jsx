export default function SignUp() {
  return (
    <div
      className="isolate  mx-auto max-w-2xl sm:max-w-2xl mb-6 px-6 py-24 sm:py-32 lg:px-8  shadow-2xl rounded-xl m-10"
      id="feedback"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">
          Feedback
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          What was your experience using the website .Give us a feedback
        </p>
      </div>
      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLScBkiGORh-h2JklLbDgi6dOhnLJXM2zDAok3Yjk153aKt9Bow/formResponse?usp=pp_url"
        method="POST"
        className="mx-auto mt-10 max-w-xl sm:mt-15"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="entry.188473240"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
                required
                placeholder="Enter your Email"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Review
            </label>
            <div className="mt-2.5">
              <textarea
                name="entry.1221720568"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-green-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Send Review
          </button>
        </div>
      </form>
    </div>
  );
}
