"use client";

import { faGoogle } from "@fortawesome/free-brands-svg-icons/faGoogle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn } from "next-auth/react";

export default function GoogleSignIn() {
  return (
    <button
      className="w-full rounded-full border border-solid border-transparent transition-colors flex flex-row items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm h-10 px-4"
      onClick={() => signIn("google")}
    >
      <FontAwesomeIcon className="h-6" icon={faGoogle} />
      <span>Sign In</span>
    </button>
  );
}
