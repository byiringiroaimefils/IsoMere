//--Dependencies--

const express = require("express");
const App = express();
const Mongoose = require("mongoose");
const Cors = require("cors");
require("dotenv").config();
const Port = process.env.PORT;


// --- Schema and Middleware for uploads----
const DBSchema = require('./Modules/StorySchema');
const ProverbSchema = require('./Modules/ProverbSchema');
const upload = require('./Modules/Uploads');


//----MiddleWare confugurations---
const corsOptions = {
  origin: "http://localhost:8000"
}
App.use(express.json());
App.use(Cors());


// --Connection of DataBases--
Mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Db is connected");
  })
  .catch((err) => {
    console.log(err);
  });



//-------SERVER FOR STORY------- 
const Stories = Mongoose.model("Story", DBSchema, "Story");
App.post("/story",(req, resp) => {
  const newStory = {
    Title: req.body.TofStory,
    Author: req.body.Author,
    image: req.body.Image,
    Decription: req.body.Decription
  };


  const Story = Stories.create(newStory)
    .then((data) => {
      resp.json(data);
    })
    .catch((err) => {
      console.log("Error", err);
    });


});


App.get("/story/:id", (req, resp) => {
  const { id } = req.params;
  const selectStory = Stories.findById(id)
    .then((data) => {
      resp.json(data);
    })
    .catch((err) => {
      console.log("Error", err);
    });
});

App.get("/Stories", (req, resp) => {
  const selectStory = Stories.find()
    .then((data) => {
      resp.json(data);
    })
    .catch((err) => {
      console.log("Error", err);
    });
});

App.delete("/deleteStory/:id", (req, resp) => {
  const { id } = req.params;
  const book = Stories.findByIdAndDelete(id)
    .then((data) => {
      resp.json("Deleted");
    })
    .catch((err) => {
      console.log("Error", err);
    });
});

App.put("/EditStory/:id", (req, resp) => {
  const newStory = {
    Title: req.body.TofStory,
    Author: req.body.Author,
    image: req.body.Image,
    Decription: req.body.Decription
  };

  const { id } = req.params;
  const Story = Stories.findByIdAndUpdate(id, newStory)
    .then((data) => {
      resp.json("Updated");
    })
    .catch((err) => {
      console.log("Error", err);
    });
});



// -----SERVER FOR PROVERBS-----
const proverbs = Mongoose.model("Proverbs", ProverbSchema, "Proverbs");
App.post("/proverb", (req, resp) => {

  const newProverb = {
    TitleofProverb: req.body.Tofproverb,
    Proverb: req.body.Proverb
  };


  const Proverb = proverbs.create(newProverb)
    .then((data) => {
      resp.json(data);
      console.log(data.data)
    })
    .catch((err) => {
      console.log("Error", err);
    });
});


App.get("/proverb/:id", (req, resp) => {
  const { id } = req.params;
  const selectproverb = proverbs.findById(id)
    .then((data) => {
      resp.json(data);
    })
    .catch((err) => {
      console.log("Error", err);
    });
});

App.get("/proverbs", (req, resp) => {
  const selectProverb = proverbs.find()
    .then((data) => {
      resp.json(data);
    })
    .catch((err) => {
      console.log("Error", err);
    });
});

App.delete("/deleteProverb/:id", (req, resp) => {
  const { id } = req.params;
  const book = proverbs.findByIdAndDelete(id)
    .then((data) => {
      resp.json("Deleted");
    })
    .catch((err) => {
      console.log("Error", err);
    });
});

App.put("/EditProverb/:id", (req, resp) => {

  const newProverb = {
    TitleofProverb: req.body.Tofproverb,
    Proverb: req.body.Proverb
  };
  const { id } = req.params;
  const proverb = proverb.findByIdAndUpdate(id, newProverb)
    .then((data) => {
      resp.json("Updated");
    })
    .catch((err) => {
      console.log("Error", err);
    });
});



//-----SERVER FOR UPLOADS-----
// App.post('/upload', upload.single('file'), (req, res) => {

// });




// Listener of Port
App.listen(Port, () => {
  console.log(`This app is running on ${Port}`);
});
