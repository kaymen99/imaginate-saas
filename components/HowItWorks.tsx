import { workingSteps } from "@/constants";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <section className="w-full">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <div className="grid gap-6 lg:gap-8">
          <div className="grid gap-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              How it Works
            </h2>
            <p className="text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
              Discover the seamless photo editing experience powered by AI.
            </p>
          </div>
          <div className="grid gap-6">
            {workingSteps.map((step, index) => (
              <div
                key={index}
                className="grid grid-cols-[auto_1fr] items-center gap-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-6 lg:gap-8">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center lg:gap-4">
            <Image
              src="/assets/step1.png"
              alt="Step 1"
              className="aspect-square object-cover rounded-lg shadow-lg dark:shadow-none"
              height={400}
              width={400}
            />
            <ArrowRight className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            <Image
              src="/assets/step2.png"
              alt="Step 2"
              className="aspect-square object-cover rounded-lg shadow-lg dark:shadow-none"
              height={400}
              width={400}
            />
          </div>
          <div className="grid grid-cols-[1fr_auto_1fr] items-center lg:gap-4">
            <Image
              src="/assets/step3.png"
              alt="Step 3"
              className="aspect-square object-cover rounded-lg shadow-lg dark:shadow-none"
              height={400}
              width={400}
            />
            <ArrowLeft className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            <Image
              src="/assets/step4.png"
              alt="Step 4"
              className="aspect-square object-cover rounded-lg shadow-lg dark:shadow-none"
              height={400}
              width={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
