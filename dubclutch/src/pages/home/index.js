import React from "react";
import { ConteinerSec } from "../../components/ConteinerSec";
import { ConteinerTerc } from "../../components/ConteinerTerc";
import { Conteinerprincipal } from "../../components/Conteinerprincipal";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import './home.css';

export default function Home() {
   return (
      <>
            <Header />
            <Conteinerprincipal />
            <ConteinerSec />
            <ConteinerTerc />
            <Footer />
      </>
   )


}