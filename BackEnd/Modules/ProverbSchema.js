const Mongoose = require("mongoose");

const ProverbSchema = new Mongoose.Schema(
    {
      TitleofProverb: {
        type: String,
        required: true
      },
      Author: {
        type: String,
        required: true,
      },
      Proverb: {
        type: String,
        required: true
      },
    },
    {
      timestamps: true,
    }
  );
  module.exports=ProverbSchema;