import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="root">
      <Navbar />
      <div className="root-container">{children}</div>
      <Toaster />
    </div>
  );
};

export default RootLayout;
