import React, { Component } from "react";
import {Conteinerprincipal} from "../../components/Conteinerprincipal";
import {ConteinerSec} from "../../components/ConteinerSec";
import {ConteinerTerc} from "../../components/ConteinerTerc";
import './home.css'

export default function Home() {
   return (
      <>
      <Conteinerprincipal/>
      <ConteinerSec/>
      <ConteinerTerc/>
      </>
   )


}