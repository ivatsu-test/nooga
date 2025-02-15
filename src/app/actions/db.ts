"use server";

import client from "@/lib/db";

export const createOne = async <T extends object>(
  collection: string,
  data: T
) => {
  try {
    const response = await client.db().collection(collection).insertOne(data);
    return JSON.stringify(response);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const createMany = async <T extends object>(
  collection: string,
  data: T[]
) => {
  try {
    const response = await client.db().collection(collection).insertMany(data);
    return JSON.stringify(response);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
