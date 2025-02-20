require("dotenv").config;
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(
   cors({
      origin: [process.env.CORS_ORIGIN, "http://localhost:3000"],
      credentials: true,
      optionsSuccessStatus: 200,
   })
);
app.use(express.json({ limit: "16KB" }));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

const userRoutes = require("./routes/user.routes");
const videoRoutes = require("./routes/video.routes");
const postRoutes = require("./routes/post.routes");
const subscriptionRoutes = require("./routes/subscription.routes");
const likeRoutes = require("./routes/like.routes");
const commentRoutes = require("./routes/comment.routes");
const statsRoutes = require("./routes/stats.routes");
const playlistRoutes = require("./routes/playlist.routes");
const errorHandler = require("./middlewares/error-handler.middleware");

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/videos", videoRoutes);
app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/subscriptions", subscriptionRoutes);
app.use("/api/v1/likes", likeRoutes);
app.use("/api/v1/comments", commentRoutes);
app.use("/api/v1/channel", statsRoutes);
app.use("/api/v1/playlists", playlistRoutes);

app.use(errorHandler);
module.exports = app;
