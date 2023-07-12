import { StatusCodes } from "http-status-codes";
import Comment from "../models/Comment.js";
/**
 * Controller method to get a list of users from the users collection.
 * @param {*} req
 * @param {*} res
 */
export const OwnerListComment = async (req, res) => {
  try {
    const unreadComments = await Comment.find({ isRead: false });

    for (const comment of unreadComments) {
      comment.isRead = true;
      await comment.save();
    }
    // const page = parseInt(req.query.page) || 1;
    // const limit = 3;
    // const skip = (page - 1) * limit;
    // const totalComments = await Comment.countDocuments();

    const updatedComments = await Comment.find();

    return res.status(StatusCodes.OK).json(updatedComments);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};
export const OwnerUnReadComment = async (req, res) => {
  try {
    const comments = await Comment.find({ isRead: false });

    return res.status(StatusCodes.OK).json(comments.length);
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
export const ListComment = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Get the page number from query parameters or default to 1
    const limit = 6; // Number of documents to fetch per page
    const skip = (page - 1) * limit; // Calculate the number of documents to skip based on the page number

    const totalComments = await Comment.countDocuments(); // Get the total count of meditations
    const comments = await Comment.find().skip(skip).limit(limit); // Fetch the meditations based on skip and limit

    return res.status(StatusCodes.OK).json({
      page,
      limit,
      totalComments,
      comments,
    });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};
export const createComment = async (req, res) => {
  try {
    const createComment = await Comment.create({
      userName: req.body.userName,
      comment: req.body.comment,
      rating: req.body.rating,
    });

    return res
      .status(StatusCodes.OK)
      .json({ message: "comment was created", createComment });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.toString() });
  }
};
export const deleteCommentById = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);

    if (!comment) {
      return res.status(StatusCodes.NOT_FOUND).json("comment not found");
    }

    return res
      .status(StatusCodes.OK)
      .json({ message: "comment deleted", deletedUser: comment });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Error happened", error: error.toString() });
  }
};

export const rating = async (req, res) => {
  try {
    // Fetch all comments from the database
    const comments = await Comment.find();

    // Calculate the average rating
    const totalRatings = comments.reduce(
      (sum, comment) => sum + comment.rating,
      0
    );
    const averageRating = totalRatings / comments.length;
    // Convert the average rating to a percentage
    const averageRatingPercent = (averageRating / 5) * 100;

    res.status(StatusCodes.OK).json({ averageRatingPercent });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Error happened", error: error.toString() });
  }
};
