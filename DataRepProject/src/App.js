import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Browse from './components/Browse';
import Post from './components/Post';
import Edit from './components/EditRecipe';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/browse" element={<Browse/>}/>
        <Route path="/post" element={<Post/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
    </Router>
  );
}

export default App;