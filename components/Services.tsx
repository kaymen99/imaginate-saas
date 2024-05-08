import { services } from "@/constants";
import { Brush, Crop, Magnet, Wand } from "lucide-react";

const Service = () => {
  return (
    <section className="w-full">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Elevate your visual content with our powerful AI-driven photo
            editing tools. Unlock your creative potential and transform your
            images with ease.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:hover:shadow-lg border-b-4 border-blue-500 overflow-hidden"
            >
              <div className="flex items-center">
                {service.icon}

                <h3 className="ml-4 text-lg font-semibold">{service.title}</h3>
              </div>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
