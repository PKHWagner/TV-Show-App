const mongoose = require("mongoose");

const ShowSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    minlength: [2, "Title must be at least 2 characters long"],
    maxlength: [255, "Title cannot be more than 255 characters long"]
  },
  genre: {
    type: String,
    required: [true, "Genre is required"],
    minlength: [2, "Title must be at least 2 characters long"],
    maxlength: [255, "Title cannot be more than 255 characters long"]
  },
  releaseYear: {
    type: Number,
    required: [true, "Release Year is required"],
    minlength: [1900, "Release must be at least 1900"]
  }
}, {timestamps: true});

module.exports = mongoose.model('Show', ShowSchema);