
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Features from './components/Features';
import Services from './components/Services';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      
        <Route path = '/' exact element = {<Home/>}/>
        <Route path = '/about' exact element = {<About/>}/>
        <Route path = '/features' exact element = {<Features/>}/>
        <Route path = '/services' exact element = {<Services/>}/>

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
