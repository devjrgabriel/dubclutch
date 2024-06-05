import React from "react";
import { Link } from "react-router-dom";
import './style.css';

const showPopup = (message, activated) => {
    const popup = document.getElementById('popup');
    popup.textContent = message;
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000);
}

const body = document.body;

function ModoEscuroLink(){
    body.classList.toggle("modoEscuroclass");
    ModoEscuroLink.classList.toggle("modoEscuroclass-active");
    showPopup(body.classList.contains("modoEscuroclass") ? "Modo Escuro ativado" : "Modo Escuro desativado", body.classList.contains("modoEscuroclass"));
}

/* 
toggleColorBlindModeLink.addEventListener("click", function () {
    body.classNameList.toggle("color-blind-mode");
    toggleColorBlindModeLink.classNameList.toggle("color-blind-mode-active");
    showPopup(body.classNameList.contains("color-blind-mode") ? "Modo Daltonismo ativado" : "Modo Daltonismo desativado", body.classNameList.contains("color-blind-mode"));
});

increaseFontSizeLink.addEventListener("click", function () {
    const currentFontSize = parseFloat(window.getComputedStyle(document.body, null).getPropertyValue('font-size'));
    document.body.style.fontSize = (currentFontSize + 1) + 'px';
    showPopup("Fonte aumentada", true);
});

decreaseFontSizeLink.addEventListener("click", function () {
    const currentFontSize = parseFloat(window.getComputedStyle(document.body, null).getPropertyValue('font-size'));
    document.body.style.fontSize = (currentFontSize - 1) + 'px';
    showPopup("Fonte diminuída", true);
}); 
*/


export function NavbarTeste() {


    return (
        <>
            <nav className="navbar navbar-expand-md">
                <div className="containerNavbar">
                    <a href="index.html" className="navbar-brand">
                        <img src="/site/images/LogoRow.png" className="imageNavbar" alt="" />Logo
                    </a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#nav-principal">
                        <i className="fas fa-bars text-white"></i>
                    </button>
                    <div id="nav-principal" className="collapse navbar-collapse navbarItems">
                        <ul className="navbar-nav ml-auto ulNavbar">
                            <li className="nav-item">
                                <Link to='/'><a className="nav-link">Publicações</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/'><a className="nav-link">Publicações</a></Link>
                            </li>
                            <li className="nav-item">
                                <a onClick={ModoEscuroLink} id="ModoEscuro" className="nav-link">Modo Escuro</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" id="toggleColorBlindMode" className="nav-link">Modo Daltonismo</a>
                            </li>
                            <div className="classNameDivFonte">
                                <a>Fonte:</a>
                                <li className="nav-item">
                                    <a href="#" id="increaseFontSize" className="nav-link">+</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" id="decreaseFontSize" className="nav-link">-</a>
                                </li>
                            </div>
                            <li className="nav-item">
                                <a href="/login/login.html" className="nav-link">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="popup" id="popup"></div>
        </>
    )
}