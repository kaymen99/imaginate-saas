import Image from "next/image";
import { Button } from "./ui/button";
import { plans } from "@/constants";
import Checkout from "./CheckOut";
import { SignedIn } from "@clerk/nextjs";

const PricingPlans = ({ userId }: { userId: string }) => {
  return (
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
            <p className="text-2xl font-bold">${plan.price}</p>
            <p className="text-md font-semibold pt-4">{plan.credits} Credits</p>
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
          <SignedIn>
            {plan.name === "Free" ? (
              <Button
                variant="main"
                className="text-lg mt-4 mx-auto"
                disabled={true}
              >
                Free
              </Button>
            ) : (
              <Checkout
                plan={plan.name}
                amount={plan.price}
                credits={plan.credits}
                buyerId={userId}
              />
            )}
          </SignedIn>
        </div>
      ))}
    </div>
  );
};

export default PricingPlans;
