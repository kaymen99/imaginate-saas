import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="px-4 md:px-6">
        <div className="flex flex-col max-md:space-y-6 md:flex-row">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Elevate Your Photos in{" "}
                <span className="text-blue-500">1 Click</span>: Experience
                AI-Powered Editing!
              </h1>
              <p className="max-w-[600px] text-gray-500 text-md md:text-xl dark:text-gray-400">
                Discover the future of image editing with our AI-powered
                platform. Easily recolor, resize, and remove objects with a
                single clic,
                <span className="font-semibold text-blue-500">
                  {" "}
                  no more Photoshop needed!
                </span>{" "}
                Transform your photos into masterpieces hassle-free.
              </p>
            </div>
            <div className="flex gap-2">
              <Link href="/transformation/transform">
                <Button variant="main">Try It Out</Button>
              </Link>
              <Link href="#pricing">
                <Button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-300 ease-in-out">
                  Pricing
                </Button>
              </Link>
            </div>
          </div>
          <Image
            src="/assets/hero.jpeg"
            alt="Hero"
            className="mx-auto overflow-hidden rounded-xl object-cover w-full order-last aspect-square"
            height="550"
            width="550"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
