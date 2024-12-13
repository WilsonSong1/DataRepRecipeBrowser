import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const RecipeItem = (props)=> {
  useEffect(() => {
    console.log("Recipe Item:", props.myrecipe);
  }, [props.myrecipe]); // Only run this effect when the mymovie prop changes

  const handleDelete = (e)=>{
    e.preventDefault();

    axios.delete('http://localhost:4000/api/recipe/'+props.myrecipe._id)
    .then((res)=>{
      props.Reload();
    })
    .catch((error)=>{
      console.log(error);
    });

  }

  return (
    <div>
      <Card>
        <Card.Header>{props.myrecipe.name}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.myrecipe.picture} alt={props.myrecipe.name}/>
            <footer>{"Time to Make: " + props.myrecipe.time} <br/>
            {"Ingredients: "+ props.myrecipe.ingredients} <br/> <br/>
            {"Instructions: " + props.myrecipe.instructions}
            </footer>
          </blockquote>
        </Card.Body>
        <Link className="btn btn-primary" to={"/edit/"+props.myrecipe._id}>Edit</Link>
        <Button className="btn btn-danger" onClick={handleDelete}>Delete</Button>
      </Card>
    </div>
  );
}

export default RecipeItem;