import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from "./components/Navbar";
import { 
  BrowserRouter as Router,
   Routes,
    Route } from "react-router-dom";
import Footer from "./components/Footer";
import Table from './components/Table';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
  <>
  <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/crud' element={<Table/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    <Footer/>
  </Router>
  </>
  );
}

export default App;
