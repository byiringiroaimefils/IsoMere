//--Dependencies--
const express = require("express");
const App = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const connectDB = require('./DB');
const Port = process.env.PORT || 3000;

// --- Schema and Middleware for uploads----
const DBSchema = require('./Modules/StorySchema');
const ProverbSchema = require('./Modules/ProverbSchema');
const BiblicalSchema = require('./Modules/BiblicalSchema.js');

//----MiddleWare configurations---
const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:8000",
  credentials: true,
  optionsSuccessStatus: 200
}
App.use(express.json());
App.use(cors(corsOptions));


// --Connection of DataBase--
connectDB()
  .then(() => {
    App.listen(Port, () => {
      console.log(`Server running on port ${Port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to start server:", err);
    process.exit(1);
  });


  
//-------SERVER FOR STORY------- 

// Instert Stories API.

const Stories = mongoose.model("Story", DBSchema, "Story");

App.post("/story", async (req, resp) => {
  // Validate input
  if (!req.body.Title || !req.body.Author || !req.body.image || !req.body.Decription) {
    return resp.status(400).json({ error: "All fields are required." });
  }

  const newStory = {
    Title: req.body.Title,
    Author: req.body.Author,
    image: req.body.image,
    Decription: req.body.Decription
  };

  try {
    const createdStory = await Stories.create(newStory);
    resp.status(201).json(createdStory);
  } catch (err) {
    console.error("Error", err);
    resp.status(500).json({ error: "Failed to create story." });
  }
});


//get story according to the Id 
App.get("/story/:id", async (req, resp) => {
  const { id } = req.params;
  try {
    const data = await Stories.findById(id);
    resp.json(data);
  } catch (err) {
    console.log("Error", err);
    resp.status(500).json({ error: "Failed to fetch story." });
  }
});

// Get all stories.
App.get("/Stories", async (req, resp) => {
  try {
    const data = await Stories.find();
    resp.json(data);
  } catch (err) {
    console.log("Error", err);
    resp.status(500).json({ error: "Failed to fetch stories." });
  }
});


// Delete story according to the Id
App.delete("/deleteStory/:id", async (req, resp) => {
  const { id } = req.params;
  try {
    await Stories.findByIdAndDelete(id);
    resp.json("Deleted");
  } catch (err) {
    console.log("Error", err);
    resp.status(500).json({ error: "Failed to delete story." });
  }
});


// Edit Story accorinf to the Id
App.put("/EditStory/:id", async (req, resp) => {
  const { id } = req.params;

 

  const updatedStory = {
    Title: req.body.Title,
    Author: req.body.Author,
    image: req.body.image,
    Decription: req.body.Decription,
  };

  try {
    const story = await Stories.findByIdAndUpdate(id, updatedStory);
    resp.status(200).json({ message: "Story updated successfully.", story });
  } catch (err) {
    console.error("Error", err);
    resp.status(500).json({ error: "Failed to update story." });
  }
});

// -------------------------------------------------------- Server For story collection -------------------------------------------------


// -----SERVER FOR PROVERBS-----
const proverbs = mongoose.model("Proverbs", ProverbSchema, "Proverbs");

// Insert new proverb
App.post("/proverb", async (req, resp) => {
  console.log("Received proverb data:", req.body);
  
  const newProverb = {
    TitleofProverb: req.body.TitleofProverb,
    Author: "aimeCode Aime Fils",
    Proverb: req.body.Proverb
  };

  console.log("Creating proverb with:", newProverb);

  try {
    const data = await proverbs.create(newProverb);
    resp.json(data);
  } catch (err) {
    console.log("Error", err);
    resp.status(500).json({ error: "Failed to create proverb." });
  }
});



// Select proverb according to the Id
App.get("/proverb/:id", async (req, resp) => {
  const { id } = req.params;
  try {
    const data = await proverbs.findById(id);
    resp.json(data);
  } catch (err) {
    console.log("Error", err);
    resp.status(500).json({ error: "Failed to fetch proverb." });
  }
});


// Select All proverb(Dispay)
App.get("/proverbs", async (req, resp) => {
  try {
    const data = await proverbs.find();
    resp.json(data);
  } catch (err) {
    console.log("Error", err);
    resp.status(500).json({ error: "Failed to fetch proverbs." });
  }
});

//Delete proverb according to the ID
App.delete("/deleteProverb/:id", async (req, resp) => {
  const { id } = req.params;
  try {
    await proverbs.findByIdAndDelete(id);
    resp.json("Deleted");
  } catch (err) {
    console.log("Error", err);
    resp.status(500).json({ error: "Failed to delete proverb." });
  }
});


// Edit  proverb according to the ID(Updated)
App.put("/EditProverb/:id", async (req, resp) => {
  const newProverb = {
    TitleofProverb: req.body.TitleofProverb,
    Author: "aimeCode Aime Fils",
    Proverb: req.body.Proverb
  };
  const { id } = req.params;
  try {
    const data = await proverbs.findByIdAndUpdate(id, newProverb);
    resp.json("Updated");
  } catch (err) {
    console.log("Error", err);
    resp.status(500).json({ error: "Failed to update proverb." });
  }
});

// --------------------------------------  Server of Proverb Collection -----------


// //-----SERVER FOR BIBILICAL STORY-----

const BStory = mongoose.model("Biblical", BiblicalSchema, "Biblical");

// Insert Biblical story
App.post("/InsertBiblical", async (req, resp) => {
  const NewBiblicalStory = {
    Title:req.body.Title,
    Author:req.body.Author,
    image: req.body.image,
    Decription: req.body.Decription
  };

  try {
    const data = await BStory.create(NewBiblicalStory);
    resp.json(data);
  } catch (err) {
    console.log("Error", err);
    resp.status(500).json({ error: "Failed to create biblical story." });
  }
});

// Select all biblicat stories
App.get("/selectBiblical", async (req, resp) => {
  try {
    const data = await BStory.find();
    resp.json(data);
  } catch (err) {
    console.log("Error", err);
    resp.status(500).json({ error: "Failed to fetch biblical stories." });
  }
});

// Select  biblica stories by id
App.get("/selectByIdB/:id", async (req, resp) => {
  const { id } = req.params;
  try {
    const data = await BStory.findById(id);
    resp.json(data);
  } catch (err) {
    console.log("Error", err);
    resp.status(500).json({ error: "Failed to fetch Biblical ." });
  }
});


// delete biblical by the id
App.delete("/deleteBStory/:id", async (req, resp) => {
  const { id } = req.params;

  try {
    await BStory.findByIdAndDelete(id);
    resp.json("Deleted");
  } catch (err) {
    console.log("Error", err);
    resp.status(500).json({ error: "Failed to delete biblical story." });
  }
});

// update according to the id
App.put("/EditBiblical/:id", async (req, resp) => {
  const newBiblicalStory = {
    Title: req.body.Title ,
    Author:req.body.Author,
    image: req.body.image,
    Decription:req.body.Decription
  };

  const { id } = req.params;
  try {
    const data = await BStory.findByIdAndUpdate(id, newBiblicalStory);
    resp.json("Updated");
  } catch (err) {
    console.log("Error", err);
    resp.status(500).json({ error: "Failed to update biblical story." });
  }
});

// Listener of Port of server.
App.listen(Port, () => {
  console.log(`This app is running on ${Port}`);
});
