"use client";

import { createMany } from "@/app/actions/db";
import { usersSchema, Users } from "@/models/user";

const createUsers = (users: Users) => {
  return createMany("users", users);
};

export default function CreateUsers() {
  const exampleUser = {
    name: "John Doe",
    email: "john.doe@example.com",
    image: "https://example.com/john-doe.jpg",
    emailVerified: null,
  };

  const users = [exampleUser, exampleUser];

  const res = usersSchema.safeParse(users);

  if (!res.success) {
    throw new Error(res.error.errors.join(", "));
  }

  return (
    <button
      className="p-4 text-center bg-green-100 rounded-md text-green-800"
      onClick={() => createUsers(res.data)}
    >
      Create Users
    </button>
  );
}
