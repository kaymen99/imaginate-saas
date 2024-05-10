import PricingPlans from "@/components/PricingPlans";
import { getUser } from "@/lib/actions/users.actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const CreditPage = async () => {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");

  const user = await getUser(userId);
  return (
    <div className="p-10 mb-8">
      <div className="w-full py-24 md:py-18 bg-gradient-to-r from-[#63a1f1] to-[#b6bbc2] rounded-xl">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Buy Credits
            </h1>
            <p className="text-lg text-gray-200 md:text-xl font-semibold">
              Choose your plan
            </p>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <PricingPlans userId={user._id} />
      </div>
    </div>
  );
};

export default CreditPage;
