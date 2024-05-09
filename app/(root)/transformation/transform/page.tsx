import { redirect } from "next/navigation";
import { getUser } from "@/lib/actions/users.actions";
import { auth } from "@clerk/nextjs/server";
import TransformForm from "@/components/TransformForm";

const TransformPage = async () => {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");

  // get user from DB
  const { user } = await getUser(userId);
  const id: string = user._id;

  return (
    <div className="p-10 mb-8">
      <div className="w-full py-24 md:py-18 bg-gradient-to-r from-[#63a1f1] to-[#b6bbc2] rounded-xl">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Start Editing
            </h1>
            <p className="text-lg text-gray-200 md:text-xl font-semibold">
              Choose your transformation and get your new photo in one click.
            </p>
          </div>
        </div>
      </div>
      <TransformForm userId={id} />
    </div>
  );
};

export default TransformPage;
