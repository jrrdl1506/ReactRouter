import React from "react";
import Menu from './menu';
import { Outlet } from "react-router-dom";

export default function Contact() {
    return(
        <>
         <Menu></Menu>
         <h1>Contacto component</h1>
         <Outlet/>
        </>
       
    );
}

