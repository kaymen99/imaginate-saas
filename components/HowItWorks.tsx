import { ArrowLeft, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-22">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <div className="grid gap-6 lg:gap-8">
          <div className="grid gap-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              How it Works
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Discover the seamless photo editing experience powered by AI.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="grid grid-cols-[auto_1fr] items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
                1
              </div>
              <div>
                <h3 className="font-semibold">Upload your photo</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Start by uploading your image to our secure platform.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[auto_1fr] items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
                2
              </div>
              <div>
                <h3 className="font-semibold">Let our AI work its magic</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our advanced AI algorithms analyze and enhance your photo.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[auto_1fr] items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
                3
              </div>
              <div>
                <h3 className="font-semibold">Review and refine</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Customize the edits and fine-tune the results to your liking.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[auto_1fr] items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
                4
              </div>
              <div>
                <h3 className="font-semibold">Download your masterpiece</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Once you're satisfied, download your enhanced photo.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-6 lg:gap-8">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <img
              alt="Step 1"
              className="aspect-square object-cover rounded-lg"
              height={400}
              src="/assets/wall.jpeg"
              width={400}
            />
            <ArrowRight className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            <img
              alt="Step 2"
              className="aspect-square object-cover rounded-lg"
              height={400}
              src="/assets/wall.jpeg"
              width={400}
            />
          </div>
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <img
              alt="Step 3"
              className="aspect-square object-cover rounded-lg"
              height={400}
              src="/assets/wall.jpeg"
              width={400}
            />
            <ArrowLeft className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            <img
              alt="Step 4"
              className="aspect-square object-cover rounded-lg"
              height={400}
              src="/assets/wall.jpeg"
              width={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
