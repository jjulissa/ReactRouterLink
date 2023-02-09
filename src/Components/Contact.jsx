import ImgContact from '../Asset/compu.jpeg'

import { Link } from "react-router-dom"


export default function Contac() {
    

    return ( 
        <div> 
            <h1>Hola, Contactos !!!</h1> 
            <p>Parafo de Contacts</p> 
            <img src={ImgContact} alt='rolex'/> 
            <Link to='/Home'>Home</Link> 
            <Link to='/About'>About</Link>
        </div>
    )
} 

