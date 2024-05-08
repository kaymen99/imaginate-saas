"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "../database";
import User from "../models/users.model";

// Create
export async function createUser(user: CreateUserParams) {
  try {
    await connectToDB();

    // add user to DB
    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    console.log(error);
  }
}

// Get
export async function getUser(id: string) {
  try {
    await connectToDB();

    const user = await User.findOne({ clerkId: id });
    if (!user) throw new Error("User not found");

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    console.log(error);
  }
}

// Update
export async function updateUser(id: string, user: UpdateUserParams) {
  try {
    await connectToDB();

    // update user info to DB
    const updatedUser = await User.findOneAndUpdate({ clerkId: id }, user, {
      new: true,
    });
    if (!updatedUser) throw new Error("User not updated");

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    console.log(error);
  }
}

// Update user credits
export async function updateCredits(userId: string, credit: number) {
  try {
    await connectToDB();

    // find user and update credits balance
    const updatedUser = await User.findByIdAndUpdate(
      { _id: userId },
      { $inc: { creditBalance: credit } },
      { new: true }
    );
    if (!updatedUser) throw new Error("Credits not updated");

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    console.log(error);
  }
}

// Delete
export async function removeUser(id: string) {
  try {
    await connectToDB();

    // find user to remove
    const userToRemove = await User.findOne({ clerkId: id });
    if (!userToRemove) throw new Error("User not found");

    // remove user from DB
    const deletedUser = await User.findByIdAndDelete(userToRemove._id);
    revalidatePath("/");

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    console.log(error);
  }
}
