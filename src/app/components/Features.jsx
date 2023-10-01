"use client";

import React from "react";
import Image from "next/image";

const features = [
  {
    name: "Instant GPA Calculation.",
    description:
      "Our result calculator provides you with an instant and precise GPA calculation. No more manual calculations or guesswork. With just a few clicks, you can know your GPA for a specific semester or your overall academic performance.",
    icon: "fast.svg",
  },
  {
    name: "Save and Track Your Academic Progress",
    description:
      "Keep all your academic data in one place. Our platform allows you to save your course information and results. You can track your progress throughout the semester and access your historical data whenever you need it. Never lose track of your academic journey again.",
    icon: "save.svg",
  },
  {
    name: "Easy Course Credit Calculations",
    description:
      "Calculating course credits can be confusing, especially when you have multiple courses with varying credits. Our result calculator simplifies this process. Just input your course details, and it will automatically handle the credit calculations for you.",
    icon: "check.svg",
  },
];

export default function Features() {
  return (
    <div className="overflow-hidden py-20 sm:py-29 bg-gray-100" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-6">
        <div className="mx-auto flex justify-center">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="text-3xl font-bold tracking-tight text-green-700 sm:text-4xl text-center">
                Everything you need
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start mb-8">
                    <div className=" mr-2">
                      <Image
                        aria-hidden="true"
                        width={130}
                        height={130}
                        alt="icons"
                        src={`/images/${feature.icon}`}
                      />
                    </div>
                    <div className="text-start">
                      <dt className="font-bold text-gray-900">
                        {feature.name}
                      </dt>
                      <dd>{feature.description}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
