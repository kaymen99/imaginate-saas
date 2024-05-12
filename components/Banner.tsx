import Link from "next/link";

const Banner = () => {
  return (
    <section className="w-full py-12 md:py-12 bg-gradient-to-r from-[#63a1f1] to-[#5ca6f6]">
      <div className="container px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Transform Your Photos with AI Magic
          </h1>
          <p className="text-lg text-gray-200 md:text-xl lg:text-2xl">
            Unlock the power of AI to enhance, edit, and elevate your photos
            like never before. Our intuitive tools make it easy to create
            stunning, professional-quality images with just a few clicks.
          </p>
          <Link
            className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-white font-bold text-lg transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6366F1]"
            href="/transformation/transform"
          >
            Try it Now
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Banner;
