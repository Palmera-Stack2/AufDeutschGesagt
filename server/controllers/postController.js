import { StatusCodes } from "http-status-codes";
import Post from "../models/Post.js";

/**
 * Controller method to get a list of users from the users collection.
 * @param {*} req
 * @param {*} res
 */
export const OwnerListPost = async (req, res) => {
  try {
    const postList = await Post.find();
    return res.status(StatusCodes.OK).json(postList);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};
/**
 * Controller method to get a list of users from the users collection.
 * @param {*} req
 * @param {*} res
 */
export const ListPost = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Get the page number from query parameters or default to 1
    const limit = 6; // Number of documents to fetch per page
    const skip = (page - 1) * limit; // Calculate the number of documents to skip based on the page number

    const totalPosts = await Post.countDocuments(); // Get the total count of meditations
    const posts = await Post.find().skip(skip).limit(limit); // Fetch the meditations based on skip and limit

    return res.status(StatusCodes.OK).json({
      page,
      limit,
      totalPosts,
      posts,
    });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};
export const createPost = async (req, res) => {
  try {
    const createPost = await Post.create({
      content: req.body.content,
    });

    return res
      .status(StatusCodes.OK)
      .json({ message: "post was created", createPost });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};
export const deletePostById = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);

    if (!post) {
      return res.status(StatusCodes.NOT_FOUND).json("post not found");
    }

    return res
      .status(StatusCodes.OK)
      .json({ message: "post deleted", deletedPost: post });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Error happened", error: error.toString() });
  }
};
export const UpdatePostById = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      {
        content: req.body.content,
      },
      { new: true }
    );

    if (!post) {
      return res.status(StatusCodes.NOT_FOUND).json("post not found");
    }

    return res
      .status(StatusCodes.OK)
      .json({ message: "post deleted", deletedPost: post });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Error happened", error: error.toString() });
  }
};
