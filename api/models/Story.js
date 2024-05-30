const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const StorySchema = new Schema(
  {
    categoryId: {
      type: String,
      required: true,
    },
    categoryName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    cover: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const StoryModel = model("Story", StorySchema);

module.exports = StoryModel;
