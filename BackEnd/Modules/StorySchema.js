const Mongoose = require("mongoose");
const DBSchema = new Mongoose.Schema(
    {
      Title: {
        type: String,
        required: true,
      },
      Author_Image: {
        type: String,
        required: true,
      },
      Author: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      Decription: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );
  module.exports=DBSchema;