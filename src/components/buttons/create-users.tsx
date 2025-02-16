"use client";

import { createMany } from "@/app/actions/db";
import { Users, userSchema, usersSchema } from "@/models/user";

const createUsers = (users: Users) => {
  return createMany("users", users);
};

export default function CreateUsers() {
  async function onCreateUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    const _u = [];

    for (const user of users) {
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

      _u.push(res.data);
    }

    const res = usersSchema.safeParse(_u);

    if (!res.success) {
      throw new Error(res.error.errors.join(", "));
    }

    createUsers(res.data);
  }

  return (
    <button
      className="p-4 text-center bg-green-100 rounded-md text-green-800"
      onClick={onCreateUsers}
    >
      Create Users
    </button>
  );
}
