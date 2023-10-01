import Link from "next/link";

export default function Predictions() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Coming Soon!</h1>
        <p className="text-gray-600 mb-8">
          We are working hard to bring you something amazing. Stay tuned!
        </p>
        <div className="flex justify-center">
          <Link
            href="/"
            className="bg-green-700 text-white font-semibold py-2 px-4 rounded-md cursor-pointer"
          >
            Subscribe
          </Link>
        </div>
      </div>
    </div>
  );
}
