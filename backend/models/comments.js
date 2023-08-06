const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  movieId: {
    type: String,
    required: true,
    minlength: [1, "Movie ID must be at least 1 characters"],
    maxlength: [15, "Movie ID cannot exceed 15 characters"],
  },
  username: {
    type: String,
    required: true,
    trim: true,
  },
  text: {
    type: String,
    required: true,
    trim: true,
    minlength: [3, "Comment text must be at least 3 characters"],
    maxlength: [250, "Comment text cannot exceed 250 characters"],
  },
  rating: {
    type: Number,
    required: true,
    min: [1, "Rating must be at least 1"],
    max: [5, "Rating cannot exceed 5"],
    validate: {
      validator: Number.isInteger,
      message: "Rating must be an integer",
    },
  },
  createdDateTime: {
    type: Date,
    default: Date.now,
  },
});

const comments = mongoose.model("Comment", commentSchema);

module.exports = comments;
