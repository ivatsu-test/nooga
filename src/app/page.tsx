import CreateUser from "@/components/buttons/create-user";
import CreateUsers from "@/components/buttons/create-users";
import SignOut from "@/components/buttons/sign-out";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="bg-slate-50 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center">
        <div className="flex flex-row gap-4 items-center">
          <div className="p-4 text-center bg-green-100 rounded-md">
            <p className="text-green-800">Signed in as {session.user?.email}</p>
          </div>
          <SignOut />
        </div>
        <div className="flex flex-row gap-4">
          <CreateUser />
          <CreateUsers />
        </div>
      </main>
    </div>
  );
}
