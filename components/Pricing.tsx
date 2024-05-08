import { plans } from "@/constants";
import Image from "next/image";
import { Button } from "./ui/button";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const Pricing = () => {
  return (
    <section className="py-12" id="#pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Choose Your Plan
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col justify-center bg-white rounded-lg shadow-lg pb-6"
            >
              <div className="bg-[#63a1f1] text-white py-4 text-center rounded-t-lg">
                <p className="text-lg font-bold">{plan.name}</p>
              </div>
              <div className="p-6 text-center">
                <div className="w-16 h-16 mx-auto flex justify-center items-center rounded-full bg-[#63a1f1] mb-4">
                  {plan.icon}
                </div>
                <p className="text-xl font-semibold text-dark-600">
                  ${plan.price}
                </p>
              </div>
              <ul className="flex flex-col gap-5 py-2">
                {plan.inclusions.map((inclusion) => (
                  <li
                    key={plan.name + inclusion.label}
                    className="flex items-center gap-4"
                  >
                    <Image
                      src={`/assets/icons/${
                        inclusion.isIncluded ? "check.svg" : "cross.svg"
                      }`}
                      alt="check"
                      width={24}
                      height={24}
                    />
                    <p>{inclusion.label}</p>
                  </li>
                ))}
              </ul>
              {plan.name === "Free" ? (
                <Button
                  variant="main"
                  className="text-lg mt-4 mx-auto"
                  disabled={true}
                >
                  Free
                </Button>
              ) : (
                <>
                  <SignedIn>
                    <Button variant="main" className="text-lg mt-4 mx-auto">
                      Purchase
                    </Button>
                  </SignedIn>
                  <SignedOut>
                    <Button variant="main" className="text-lg mt-4 mx-auto">
                      Login
                    </Button>
                  </SignedOut>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
