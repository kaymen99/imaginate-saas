import { Collection } from "@/components/Collection";
import { getUserImages } from "@/lib/actions/images.actions";
import { getUser } from "@/lib/actions/users.actions";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

const ProfilePage = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;

  const { userId } = auth();
  if (!userId) redirect("/sign-in");

  const user = await getUser(userId);
  const images = await getUserImages({ page, userId: user._id });

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-5/6 space-y-10">
          <div className="py-24 md:py-18 bg-gradient-to-r from-[#63a1f1] to-[#b6bbc2] rounded-xl text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Your Profile
            </h1>
          </div>
          <div className="w-full flex flex-col justify-center items-center max-sm:space-y-4 sm:justify-between sm:flex-row">
            <div className="w-full sm:w-1/2 flex flex-col justify-center items-center">
              <p className="text-lg font-bold">CREDITS AVAILABLE</p>
              <div className="mt-4 flex items-center gap-4">
                <Image
                  src="/assets/icons/coins.svg"
                  alt="coins"
                  width={50}
                  height={50}
                />
                <h2 className="text-lg font-bold">{user.creditBalance}</h2>
              </div>
            </div>

            <div className="w-full sm:w-1/2 flex flex-col justify-center items-center">
              <p className="text-lg font-bold">IMAGE MANIPULATION DONE</p>
              <div className="mt-4 flex items-center gap-4">
                <Image
                  src="/assets/icons/photo.svg"
                  alt="coins"
                  width={50}
                  height={50}
                />
                <h2 className="text-lg font-bold">{images?.data.length}</h2>
              </div>
            </div>
          </div>
        </div>
        <section className="w-5/6 mt-12 mb-20">
          <Collection
            images={images?.data}
            totalPages={images?.totalPages}
            page={page}
            hasSearch={true}
          />
        </section>
      </div>
    </>
  );
};
export default ProfilePage;
