"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "../database";
import User from "../models/users.model";
import Image from "../models/images.model";

const populateUser = (query: any) =>
  query.populate({
    path: "creator",
    model: User,
    select: "_id firstName lastName clerkId",
  });

// Create
export async function saveImage({ image, userId, path }: AddImageParams) {
  try {
    await connectToDB();

    const creator = await User.findById(userId);
    if (!creator) throw new Error("Not found");

    // add image to DB
    const newImage = await Image.create({ ...image, creator: creator._id });
    revalidatePath(path);

    return JSON.parse(JSON.stringify(newImage));
  } catch (error) {
    console.log(error);
  }
}

// Get
export async function getImage(imageId: string) {
  try {
    await connectToDB();

    const image = await populateUser(Image.findById(imageId));
    if (!image) throw new Error("image not found");

    return JSON.parse(JSON.stringify(image));
  } catch (error) {
    console.log(error);
  }
}

// Get all user images
export async function getUserImages({
  userId,
  page = 1,
  limit = 9,
}: {
  userId: string;
  page: number;
  limit?: number;
}) {
  try {
    await connectToDB();

    const skipAmount = Number(page - 1) * limit;
    const images = await populateUser(Image.find({ creator: userId }))
      .sort({
        updatedAt: -1,
      })
      .skip(skipAmount)
      .limit(limit);

    const imagesCount = await Image.find({ creator: userId }).countDocuments();

    return {
      data: JSON.parse(JSON.stringify(images)),
      totalPages: Math.ceil(imagesCount / limit),
    };
  } catch (error) {
    console.log(error);
  }
}

// Update
export async function updateImage({ image, userId, path }: UpdateImageParams) {
  try {
    await connectToDB();

    // check if image exists & caller if creator
    const imageToUpdate = await Image.findById(image._id);
    if (!imageToUpdate || imageToUpdate.creator.toHexString() !== userId)
      throw new Error("Unauthorized or image not found");

    // update image
    const updatedImage = await User.findByIdAndUpdate(
      imageToUpdate._id,
      image,
      {
        new: true,
      }
    );
    if (!updatedImage) throw new Error("Image not updated");

    revalidatePath(path);

    return JSON.parse(JSON.stringify(updatedImage));
  } catch (error) {
    console.log(error);
  }
}

// Delete
export async function deleteImage(imageId: string, userId: string) {
  try {
    await connectToDB();

    // check if image exists & caller if creator
    const imageToDelete = await Image.findById(imageId);
    if (!imageToDelete || imageToDelete.creator.toHexString() !== userId)
      throw new Error("Unauthorized or image not found");

    // remove image from DB
    await User.findByIdAndDelete(imageToDelete._id);
  } catch (error) {
    console.log(error);
  }
}
