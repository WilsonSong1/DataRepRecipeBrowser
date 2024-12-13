//importing required modules
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './EditRecipe.css';

const Edit = () => {
    //Defining state variables for recipe data
    const {id} = useParams();
    const [picture, setPicture] = useState("");
    const [name, setName] = useState("");
    const [time, setTime] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const navigate = useNavigate();

    //Finding specific recipe by data from the database
    useEffect(()=>{
        axios.get('http://localhost:4000/api/recipe/'+id)
        .then((res)=>{
            console.log("sucess "+res.data);
            //set new data int o the state variables
            setPicture(response.data.picture);
            setName(response.data.name);
            setTime(response.data.time);
            setIngredients(response.data.ingredients);
            setInstructions(response.data.instructions);
        })
        .catch((err)=>{console.log(err)});
    },[id]);


    const handleSubmit = (e) => {
        e.preventDefault();
        const recipe = { id, picture, name, time, ingredients, instructions};
        console.log(recipe);

        //updating the recipe data on database
        axios.put('http://localhost:4000/api/recipe/'+id, recipe)
        .then((res)=>{
            alert("Successfully updated!");
            navigate('/browse');
        })
        .catch((err)=>{
            console.log(err);
        });
      
    }

    //Creating form for user to edit their recipes
    return (
        <div class="container-post">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Recipe Picture: </label>
                    <input type="text"
                        className="form-control"
                        value={picture}
                        onChange={(e) => { setPicture(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Recipe Name: </label>
                    <input type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Recipe time to make: </label>
                    <input type="text"
                        className="form-control"
                        value={time}
                        onChange={(e) => { setTime(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Recipe Ingredients: </label>
                    <input type="text"
                        className="form-control"
                        value={ingredients}
                        onChange={(e) => { setIngredients(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Recipe Instructions: </label>
                    <input type="text"
                        className="form-control"
                        value={instructions}
                        onChange={(e) => { setInstructions(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit" value="Edit Recipe"></input>
                </div>
            </form>
        </div>
    );
}
export default Edit;