// Dependencies
const express = require("express");
const App = express();
const Mongoose = require("mongoose");
const Cors = require("cors");
// const { default: mongoose } = require("mongoose");

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
    Date: true,
  }
);



const Stories = Mongoose.model("Story", DBSchema, "Story");


// Here is to Post New book in DB and Also routing it
App.post("/story", (req, resp) => {
  const newStory = {
    Title:"My Dream",
    image:"https://learnenglishkids.britishcouncil.org/sites/kids/files/styles/max_1300x1300/public/image/RS7833_ThinkstockPhotos-851359014-hig.jpg?itok=Vz4IWwFu",
    Decription:"Once upon a time a dog and a rabbit lived in a jungle. One day they were sitting under the tree. The dog was informing the rabbit of the arrival of a new tiger in the jungle.The tiger is really smart, the dog told the rabbit. He catches and preys on all the little animals! After hearing the dog, the rabbit was terrified.The dog and the rabbit Dear friend, I only know one technique to save myself,the rabbit said. I need to brush up on my skills!I know a lot of tricks, the dog responded. I can jump over bushes, run swiftly, hide under trees, and even shovel up sand and bury myself.The little rabbit asked the dog to show him some tricks.Could you possibly teach me one of those tricks? he pleaded. I only know one. I need to brush up on my tricks! My tricks are for the intellectual animals, the dog remarked. You aren't a smart animal. Why should I teach you all the tricks? argues the dog. Hearing this from his friend the bunny felt disheartened.Suddenly, he noticed the tiger approaching them. The tiger approached them cautiously but steadily.See, the tiger is approaching the rabbit warned the dog.Im going to climb up the tree using my ruse. You, too, will save yourself by employing your techniques and well meet when the tiger goes back!The rabbit climbed the tree fast. When the tiger approached the dog, the dog began running about aimlessly. He hid behind the bushes, but the tiger caught him.The rabbit who climbed up the tree saved his life but the dog became the prey of the tiger. Conclusion We can conclude the article by stating the moral of the story of rabbit and the dog. The story teaches us that it is important to never boast about the skills and always help others when they are in need. As in the story, the dog knew many tricks but refused to teach them to his friend while boasting them to him The rabbit on the other hand only knew a single trick but he survived the attack of the tiger",
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
// Here we are going to select all Data From Db
App.get("/Stories", (req, resp) => {
  const selectStory = Stories.find()
    .then((data) => {
      resp.json(data);
    })
    .catch((err) => {
      console.log("Error", err);
    });
});



const ProverbSchema = new Mongoose.Schema(
  {
     TitleofProverb:{
        type:String,
        required:true
     },
     Proverb:{
        type:String,
        required:true
     },
  }
);
const proverbs = Mongoose.model("Proverbs", ProverbSchema, "Proverbs");



App.post("/proverb", (req, resp) => {

  const newProverb = {
    TitleofProverb:"Many hands make light work",
    Proverb:"This is a reminder that things are always easier if we have supportive people around us. We can achieve more and get better results if we work together with others, rather than trying to do everything by ourselves",
    };

    
  const Proverb = proverbs.create(newProverb)
    .then((data) => {
      resp.json(data);
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



// Listener of Port
App.listen(Port, () => {
  console.log(`This app is running on ${Port}`);
});
