import ImgAbout from '../Asset/casa.jpeg'
import { Link } from "react-router-dom"



export default function Abou() {
    

    return ( 
        <div> 
            <h1>Hola, About !!!</h1> 
            <p>Parafo de About</p> 
            <img src={ImgAbout} alt='torta'/> 
            <Link to='/Home'>Home</Link> 
            <br />
            <Link to='/Contact'>Contact</Link>
        </div>
    )
} 


