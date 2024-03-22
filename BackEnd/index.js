// Dependencies
const express = require("express");
const App = express();
const Mongoose = require("mongoose");
const Cors = require("cors");
require("dotenv").config();
const Port =process.env.PORT;


const corsOptions = {
  origin: "http://localhost:8000" // frontend URI (ReactJS)
}


App.use(express.json());
App.use(Cors());

// Connection of Dbs
Mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Db is connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Setting up of Database Schema
const DBSchema = new Mongoose.Schema(
  {
    Title: {
      type: String,
      required: true,
    },
    Author: {
      type: String,
      required: true,
    },
    Decription: {
      type: String,
      required: true,
    },
    PublishYear: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Book = Mongoose.model("Book", DBSchema, "Book");

// Here is to Post New book in DB and Also routing it
App.post("/", (req, resp) => {
  const newBook = {
    Title: req.body.Title,
    Decription:req.body.Decription,
    PublishYear: req.body.PublishYear, 
    };
  const book = Book.create(newBook)
    .then((data) => {
      resp.json(data);
    })
    .catch((err) => {
      console.log("Error", err);
    });
});

// Here we are going to select all Data From Db
App.get("/book", (req, resp) => {
  const selectBook = Book.find()
    .then((data) => {
      resp.json(data);
    })
    .catch((err) => {
      console.log("Error", err);
    });
});

// Here we are select  Data From Db by using id
App.get("/book/:id", (req, resp) => {
  const { id } = req.params;
  const selectBook = Book.findById(id)
    .then((data) => {
      resp.json(data);
    })
    .catch((err) => {
      console.log("Error", err);
    });
});

// Router for Update
App.put("/book/:id", (req, resp) => {
  const newBook = {
    Title: req.body.Title,
    Author: req.body.Author,
    Decription:req.body.Decription,
    PublishYear: req.body.PublishYear,
  };
  const { id } = req.params;
  const book = Book.findByIdAndUpdate(id, newBook)
    .then((data) => {
      resp.json("Updated");
    })
    .catch((err) => {
      console.log("Error", err);
    });
});

// Router for Delete
App.delete("/book/:id", (req, resp) => {
  const { id } = req.params;
  const book = Book.findByIdAndDelete(id)
    .then((data) => {
      resp.json("Deleted");
    })
    .catch((err) => {
      console.log("Error", err);
    });
});

// Listener of Port
App.listen(Port, () => {
  console.log(`This app is running on ${Port}`);
});
