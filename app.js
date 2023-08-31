const mongoose = require('mongoose');



main().catch(err => console.log(err));



async function main() {

  mongoose.set('strictQuery',false);

  await mongoose.connect('mongodb://127.0.0.1/fruitsDB');

  console.log("Connected");



  const fruitSchema = new mongoose.Schema({

    name: String,

    rating: Number,

    review: String

  });



  const Fruit = mongoose.model('Fruit', fruitSchema);



  const fruit = new Fruit({

    name: 'Apple',

    rating: 7,

    review: 'Pretty solid as a fruit.'

  });



  //commented to avoid adding a new apple each time the app is executed.

  //fruit.save();



  // Challenge. Create a new collections for People

  const personSchema = new mongoose.Schema({

    name: String,

    age: Number

  });



  const Person = mongoose.model("Person", personSchema);



  const person = new Person({

    name: "John",

    age: "37"

  })



  person.save();



  const kiwi = new Fruit({

    name: "Kiwi",

    score: 10,

    review: "The best fruit"

  });



  const orange = new Fruit({

    name: "Orange",

    score: 4,

    review: "Too sour for me"

  });



  const banana = new Fruit({

    name: "Banana",

    score: 3,

    review: "Weird texture"

  });



  Fruit.insertMany([kiwi, orange, banana], function(err){

    if (err) {

      console.log(err);

    } else {

      console.log("Succesfully saved all the fruits to fruitsDB");

    }

  });
}
