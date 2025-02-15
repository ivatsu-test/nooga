import GoogleSignIn from "@/components/buttons/google-sign-in";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import { authOptions } from "../api/auth/[...nextauth]/auth-options";

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (!!session) {
    redirect("/");
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <GoogleSignIn />
      </main>
    </div>
  );
}
