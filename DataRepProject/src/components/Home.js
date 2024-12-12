import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () =>{

    const navigate = useNavigate();

    return(
        <div className="page-container">
            <div>
                <button type="button" onClick={()=>navigate('/browse')} id="Browse">Browse for delicious recipes</button>
            </div>
            <div>
                <button type="button" onClick={()=>navigate('/post')} id="Post">Post your own creations</button>
            </div>
        </div>
    );

    function pageBrowse(){

    }

}
export default Home;