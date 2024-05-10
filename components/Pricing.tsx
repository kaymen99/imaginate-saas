import { auth } from "@clerk/nextjs/server";
import { getUser } from "@/lib/actions/users.actions";
import PricingPlans from "./PricingPlans";

const Pricing = async () => {
  const { userId } = auth();
  const user = userId ? (await getUser(userId))._id : "";

  return (
    <section id="#pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Choose Your Plan
          </h2>
        </div>

        <PricingPlans userId={user} />
      </div>
    </section>
  );
};

export default Pricing;
