import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="root">
      <Navbar />
      <div className="root-container">{children}</div>
      <Toaster />
      <section className="px-12">
        <Footer />
      </section>
    </div>
  );
};

export default RootLayout;
