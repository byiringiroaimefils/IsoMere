const Mongoose = require("mongoose");

const ProverbSchema = new Mongoose.Schema(
    {
      Author: {
        type: String,
        required: true,
      },
      Proverb: {
        type: String,
        required: true
      },
      TitleofProverb: {
        type: String,
        required: true
      }
    },
    {
      timestamps: true,
    }
  );
  module.exports=ProverbSchema;