import './App.css'; 
import {BrowserRouter, Routes, Route} from 'react-router-dom' 

import Home from './Components/Home'
import About from './Components/About' 
import Contact from './Components/Contact' 
import  Image from './Asset/Viaje.jpeg'

function App() {
  return (
    <div className="App"> 

    <header> 
      <h1>Header de Todo</h1>
      <img src={Image} alt='money'/>
    </header>

    <BrowserRouter> 
      <Routes> 

        <Route path='/' element={<Home />} />  
        <Route path='/About' element={<About />} />  
        <Route path='/Contact' element={<Contact />} />  

      </Routes>
    </BrowserRouter> 

    <footer>@JJulissa2023</footer>
      
    </div>
  );
}

export default App;
