import Recipes from "./Recipe";
import { useEffect, useState } from "react";
import axios from "axios";

const Read = () => {

  const [recipes, setRecipes] = useState([]);

  const ReloadData = ()=>{
    axios.get('http://localhost:4000/api/recipes')
      .then((response) => {
        console.log(response.data);
        setRecipes(response.data.recipes);
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