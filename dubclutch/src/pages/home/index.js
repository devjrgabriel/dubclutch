import React from "react";
import {Conteinerprincipal} from "../../components/Conteinerprincipal";
import {ConteinerSec} from "../../components/ConteinerSec";
import {ConteinerTerc} from "../../components/ConteinerTerc";
import './home.css'
import Header from '../../components/Header';


export default function Home() {
   return (
      <>
      <Header />
      <Conteinerprincipal/>
      <ConteinerSec/>
      <ConteinerTerc/>
      </>
   )


}