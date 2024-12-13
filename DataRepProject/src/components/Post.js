import axios from "axios";
import { useState } from "react";
import './Post.css';

const Create = () => {

    const[picture, setPicture] = useState('');
    const[name, setName] = useState('');
    const[time, setTime] = useState('');
    const[ingredients, setIngredients] = useState('');
    const[instructions, setInstructions] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const recipe = {picture, name, time, ingredients, instructions};

        axios.post('http://localhost:4000/api/recipes',recipe)
        .then(()=>alert("Recipe Successfully added!"))
        .catch();
    }

    return (
        <div class="container-post">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Recipe Picture: </label>
                    <input type="text"
                        className="form-control"
                        value={picture}
                        onChange={(e) => { setPicture(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Recipe Name: </label>
                    <input type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Recipe time to make: </label>
                    <input type="text"
                        className="form-control"
                        value={time}
                        onChange={(e) => { setTime(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Recipe Ingredients: </label>
                    <input type="text"
                        className="form-control"
                        value={ingredients}
                        onChange={(e) => { setIngredients(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Recipe Instructions: </label>
                    <input type="text"
                        className="form-control"
                        value={instructions}
                        onChange={(e) => { setInstructions(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit" value="Add Recipe"></input>
                </div>
            </form>
        </div>
    );
}
export default Create;