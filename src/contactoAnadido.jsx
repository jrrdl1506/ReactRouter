import React from "react";
import { useParams } from "react-router-dom";

const ContactoAnadido = () =>{
    const { contactid } = useParams();
    return(
        <>
            <h1>Contacto añadido</h1>        
            <p>El contacto añadido es {contactid}</p>
        </>
    )
}

export default ContactoAnadido;