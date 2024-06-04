import React from "react";
import { ContainerStages } from "../../components/ContainerStages";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import './stages.css';


export default function Stages (){
    return (
        <>
            <Header />
            <ContainerStages />
            <Footer />
        </>
    )
}