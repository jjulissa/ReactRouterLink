import Imag from '../Asset/work.jpeg'
import { Link } from "react-router-dom"


export default function Inicio() {
    
    return ( 
        <div> 
            <h1>Hola, Home !!!</h1> 
            <p>Parafo de Home</p> 
            <img src={Imag} alt='rolex'/> 
            <br />
            <Link to='/About'>About</Link> 
            <br />
            <Link to='/Contact'>Contact</Link>  
        </div>
    )
}