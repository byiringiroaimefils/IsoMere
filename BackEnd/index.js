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

const Book = Mongoose.model("Book", DBSchema, "Book");

// Here is to Post New book in DB and Also routing it
App.post("/", (req, resp) => {
  const newBook = {
    Title:"My Dream",
    image:"https://learnenglishkids.britishcouncil.org/sites/kids/files/styles/max_1300x1300/public/image/RS7833_ThinkstockPhotos-851359014-hig.jpg?itok=Vz4IWwFu",
    Decription:"Sit duis est minim proident non nisi velit non consectetur. Esse adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa officia sint labore. Tempor consectetur excepteur ut fugiat veniam commodo et labore dolore commodo pariatur",
    // PublishYear: req.body.PublishYear, 
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
App.get("/Story", (req, resp) => {
  const selectBook = Book.find()
    .then((data) => {
      resp.json(data);
    })
    .catch((err) => {
      console.log("Error", err);
    });
});

// Listener of Port
App.listen(Port, () => {
  console.log(`This app is running on ${Port}`);
});
