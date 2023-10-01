// HowItWorks.js
import Image from "next/image";

export default function HowItWorks() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className=" p-4 rounded-full mb-4">
              <Image
                src="/images/learning.svg"
                width={60}
                height={60}
                alt="Learning"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
            <p className="text-gray-700 text-center">
              Create an account to get started.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className=" p-4 rounded-full mb-4">
              <Image
                src="/images/matemathic.svg"
                width={60}
                height={60}
                alt="calculator"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Explore</h3>
            <p className="text-gray-700 text-center">
              Discover amazing features and content.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className=" p-4 rounded-full mb-4">
              <Image
                src="/images/store.svg"
                width={60}
                height={60}
                alt="store"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Enjoy</h3>
            <p className="text-gray-700 text-center">
              Start enjoying the benefits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
