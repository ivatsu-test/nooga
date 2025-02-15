"use client";

import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <button
      onClick={() => signOut()}
      className="p-4 text-center bg-red-100 rounded-md text-red-800"
    >
      Sign Out
    </button>
  );
}
