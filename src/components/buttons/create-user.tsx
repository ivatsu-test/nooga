"use client";

import { createOne } from "@/app/actions/db";
import { User, userSchema } from "@/models/user";

const createUser = (user: User) => {
  return createOne("users", user);
};

export default function CreateUser() {
  async function onCreateUser() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const user = await response.json();

    const exampleUser = {
      name: user.name,
      email: user.email,
      image: `https://example.com/${user.name.split(" ").join("_")}.jpg`,
      emailVerified: null,
    };

    const res = userSchema.safeParse(exampleUser);

    if (!res.success) {
      throw new Error(res.error.errors.join(", "));
    }
    createUser(res.data);
  }

  return (
    <button
      className="p-4 text-center bg-green-100 rounded-md text-green-800"
      onClick={onCreateUser}
    >
      Create User
    </button>
  );
}
