//Importing required modules
import Recipes from "./Recipe";
import { useEffect, useState } from "react";
import axios from "axios";
import './Browse.css';

const Read = () => {

  const [recipes, setRecipes] = useState([]);

  //Getting recipe data from api
  const ReloadData = ()=>{
    axios.get('http://localhost:4000/api/recipes')
      .then((response) => {
        console.log(response.data);
        setRecipes(response.data.recipes); //update recipes with new data
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    ReloadData();
    
  },[]);

  return (
    <div>
      <Recipes myRecipes={recipes} ReloadData={ReloadData} />
    </div>
  );
}

export default Read;