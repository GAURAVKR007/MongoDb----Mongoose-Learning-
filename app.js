const { Db } = require('mongodb');
const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/fruitDB",{useNewUrlParser: true});
 
const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true,"Why not Devil Fruit"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit ({

  rating: 10,
  review: "Pretty Good as a Fruit."

});

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  About: String,
  favFruit: fruitSchema
});

const Person = mongoose.model("Person",personSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 9,
  review: "Great nice"
})

const mango = new Fruit({
  name: "Mango",
  rating: 10,
  review: "Best Fruit of All time"
})

// mango.save();

// pineapple.save();

const person = new Person({
  name: "Robin",
  age: 21,
  favFruit: pineapple,
  About: "Zoro's Wife"
});

// person.save();

// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 8,
//   review: "Good Fruit"
// });

// const orange = new Fruit ({
//   name: "Orange",
//   rating: 10,
//   review: "Best"
// });

// const banana = new Fruit({
//   name: "Banana",
//   rating: 5,
//   review: "it's Okay"
// });

// Fruit.insertMany([kiwi,orange,banana],function(err){
//   if(err) {
//     console.log(err);
//   }else{
//     console.log("Succesfully saved all the fruits to FruitDB");
//   }
// })

// Fruit.updateOne({_id: "631b0021937311143f77e6c3"}, {name: "Peaches",function(err) {
//   if(err){
//     console.log(err);
//   }else {
//     console.log("SucessFully Updated the docx.");
//   }
// }});

// Update data 

// Fruit.updateOne({_id: "631b0021937311143f77e6c3"}, {name: "Peach"}
// ).exec(function (err) {
//   if (err) {
//     console.log(err);
//   }else {
//     mongoose.disconnect(); 
//     console.log("Update Successful!");
//   };
// })

 

Fruit.find(function(err,fruits){
  
  if (err) {
    console.log(err);
  }else { 
    mongoose.disconnect();
    fruits.forEach(fruit => {
      console.log(fruit.name);
      
    })
  }
})


// Fruit.deleteOne({name:"Apple"},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Suceessfully Deleted");
//   }
// })

// Person.deleteMany({name: "Roronoa Zoro"},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully deleted all the persons");
//   }
// })

Person.updateOne({name: "Roronoa Zoro"},{favFruit: mango},function(err){
  if(err){
    console.log(err);
  }else {
    console.log("Successfully updated the content");
  }
})