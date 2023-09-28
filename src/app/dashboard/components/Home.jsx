import Link from "next/link"; // Add the Link import

export default function DashboardHome(prop) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex  items-center py-4 justify-center">
            <h1 className="text-3xl font-bold text-green-700 text-center">
              Welcome, {prop.name}!
            </h1>
          </div>
        </div>
      </header>

      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {/* Calculator Card */}
            <Link
              className="block bg-white border border-gray-200 rounded-lg p-6 hover:border-green-700 hover:shadow-md transition duration-300"
              href="/dashboard/calculator"
            >
              <div className="text-center"></div>
              <h2 className="mt-4 text-2xl font-semibold text-green-700">
                Calculator
              </h2>
              <p className="mt-2 text-gray-600">
                Calculate your results instantly with ease.
              </p>
            </Link>

            {/* Results Card */}
            <Link
              className="block bg-white border border-gray-200 rounded-lg p-6 hover:border-green-700 hover:shadow-md transition duration-300"
              href="/dashboard/results"
            >
              <div className="text-center"></div>
              <h2 className="mt-4 text-2xl font-semibold text-green-700">
                Results
              </h2>
              <p className="mt-2 text-gray-600">
                Store all your results in one place.
              </p>
            </Link>

            {/* Predictions Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-green-700 hover:shadow-md transition duration-300">
              <div className="text-center"></div>
              <h2 className="mt-4 text-2xl font-semibold text-green-700">
                Predictions
              </h2>
              <p className="mt-2 text-gray-600">
                Get insights and your GPA predictions.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
