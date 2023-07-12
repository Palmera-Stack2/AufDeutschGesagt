import { StatusCodes } from "http-status-codes";
import File from "../models/File.js";

// export const getFileById = async (req, res) => {
//  try {
//      const file = await File.findById(req.params.fileId);

//     return  res.sendFile(path.join(__dirname, `../${file.filePath}`));
//  } catch (error) {
//     return res
//       .status(StatusCodes.INTERNAL_SERVER_ERROR)
//       .json({ message: "Something went wrong" });
//   } };

export const uploadFile = async (req, res) => {
  console.log(req.file);

  try {
    const newFile = await File.create({
      originalname: req.file.originalname,
      filename: req.file.filename,
      filePath: req.file.path,
      size: req.file.size,
      fileMimetype: req.file.mimetype,
    });

    return res
      .status(StatusCodes.OK)
      .json({ message: "file uploaded", newFile });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Something went wrong" });
  }
};

export const listFile = async (req, res) => {
  try {
    const Files = await File.find();

    return res.status(StatusCodes.OK).json({ message: "list File", Files });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Something went wrong" });
  }
};
