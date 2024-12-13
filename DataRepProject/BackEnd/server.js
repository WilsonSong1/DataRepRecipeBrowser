//Importing required modules
const express = require('express');
const app = express();
const port = 4000;
//Allow requests across different domains
const cors = require('cors');
app.use(cors());

//Middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next(); //Pass request to next middleware
});

//Middleware for parsing request bodies
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Connecting to MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://1234:1234@cluster0.q2k2d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const recipeSchema = new mongoose.Schema({
  picture: String,
  name: String,
  time: String,
  ingredients: String,
  instructions: String
});

const recipeModel = new mongoose.model('Recipe',recipeSchema);


//Create a new recipe
app.post('/api/recipes',async (req, res)=>{
  console.log(req.body.title);
  const{picture, name, time, ingredients, instructions} = req.body;

   const newRecipe = new recipeModel({picture, name, time, ingredients, instructions});
  await newRecipe.save();

  res.status(201).json({"message":"Recipe Added!",Recipe:newRecipe});
})

//Get recipes from database
app.get('/api/recipes', async (req, res) => {
    const recipes = await recipeModel.find({});
    res.status(200).json({recipes})
});

//Get specific recipe by id from database
app.get('/api/recipe/:id', async (req ,res)=>{
  const recipe = await recipeModel.findById(req.params.id);
  res.json(recipe);
})


//Update a specific recipe by id from databse
app.put('/api/recipe/:id', async (req, res)=>{
  const recipe = await recipeModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.send(recipe);
})

//Delete a specific recipe by id from database
app.delete('/api/recipe/:id', async(req, res)=>{
  const recipe = await recipeModel.findByIdAndDelete(req.params.id);
  res.send(recipe);
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});