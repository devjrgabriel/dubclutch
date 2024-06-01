import React from "react";
import { ConteinerSec } from "../../components/ConteinerSec";
import { ConteinerTerc } from "../../components/ConteinerTerc";
import { Conteinerprincipal } from "../../components/Conteinerprincipal";
import './home.css';

export default function Home() {
   return (
      <>
         <Conteinerprincipal />
         <ConteinerSec />
         <ConteinerTerc />
      </>
   )


}