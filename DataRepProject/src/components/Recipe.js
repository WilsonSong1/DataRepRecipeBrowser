//Importing required component
import RecipeItem from "./RecipeItem";

const Recipes = (props)=>{
    //Goes through myRecipes array for each recipe
    return props.myRecipes.map(
        (recipe)=>{
            //Displaying all the recipes
            return <RecipeItem myrecipe={recipe} key={recipe._id} Reload={props.ReloadData} />
        }
    );
}
export default Recipes;