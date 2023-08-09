import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { StatusCodes } from "http-status-codes";
import passport from "passport";
import { configureJwtStrategy } from "./routes/passport-config.js";
import userRoutes from "./routes/userRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import fileRoutes from "./routes/fileRoutes.js";
//imports for locating our directory (for deployment)
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
import mailRoute from "./routes/mailRoutes.js";

const __filename = fileURLToPath(import.meta.url); // get the current file location of server.js
const __dirname = dirname(__filename); //extract directory from that location.

dotenv.config();

const app = express();
// app.use(express.static("views/dist"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.use(express.json());
app.use(cookieParser());

configureJwtStrategy(passport);

app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Database connected! 😃");
  })
  .catch((error) => {
    console.log(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`
    );
    console.log(error.message);
    console.log("🤨");
  });

app.use("/api/mail", mailRoute);
app.use("/api/user", userRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/post", postRoutes);
app.use("/api/files", fileRoutes);
//the files inside the folder will be served by our server
app.use("/uploads", express.static("./uploads"));

//serve our files statically
app.use(express.static(path.join(__dirname, "/../client/dist")));
//any other request made serve the index.html of our production build frontend.
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/../client/dist/index.html");
});

app.listen(process.env.PORT || 3001, () => {
  console.log("The server is listening for requests....");
});
