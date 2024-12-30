const Mongoose = require("mongoose");

const BiblicalSchema = new Mongoose.Schema(
    {
      Title: {
        type: String,
        required: true
      },
      Author: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true
      },
      Decription: {
        type: String,
        required: true
      },
    },
    {
      timestamps: true,
    }
  );

module.exports = BiblicalSchema; 