import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { navLinks } from "@/constants";

const Navbar = () => {
  return (
    <header className="px-8 py-8 w-full border-b border-gray-300">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl sm:text-3xl font-bold text-gray-900">
            Imagi<span className="text-blue-500">Nate</span>
          </span>
        </Link>
        <div className="flex items-center gap-6 max-md:hidden">
          <ul className="flex gap-x-6">
            {navLinks.map((link) => (
              <li key={link.route} className="text-lg font-semibold">
                <Link
                  href={link.route}
                  className="text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <Button variant="main">
              <Link href="/sign-in" className="font-bold text-lg">
                SignIn/Login
              </Link>
            </Button>
          </SignedOut>
        </div>
        <div className="hidden max-md:block">
          <div className="flex gap-2">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

            <SignedOut>
              <Button variant="main" className="max-[430px]:hidden">
                <Link href="/sign-in" className="font-bold text-lg">
                  SignIn/Login
                </Link>
              </Button>
            </SignedOut>
            <Sheet>
              <SheetTrigger>
                <Image
                  className="cursor-pointer"
                  src="/assets/menu.svg"
                  alt="menu"
                  width={32}
                  height={32}
                />
              </SheetTrigger>
              <SheetContent className="w-64 flex justify-start">
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/">
                      <span className="text-3xl font-bold text-gray-900">
                        Imagi<span className="text-blue-500">Nate</span>
                      </span>
                    </Link>
                  </SheetTitle>
                  <SheetDescription>
                    <ul className="flex flex-col items-start gap-y-6 mt-12 mb-8">
                      {navLinks.map((link) => (
                        <li key={link.route} className="text-lg font-semibold">
                          <Link
                            href={link.route}
                            className="text-gray-700 hover:bg-blue-100 hover:text-blue-500 transition duration-300 ease-in-out rounded-ful"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <SignedIn>
                      <UserButton afterSignOutUrl="/" showName />
                    </SignedIn>
                    <SignedOut>
                      <Button
                        variant="main"
                        className="hidden max-[430px]:block"
                      >
                        <Link href="/sign-in" className="font-bold text-lg">
                          SignIn/Login
                        </Link>
                      </Button>
                    </SignedOut>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
