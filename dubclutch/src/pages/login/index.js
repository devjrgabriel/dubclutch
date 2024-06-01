import React ,{Component}from "react";
import {MostrarLogin,MostrarRegistro,registrar,login} from'./login.js'
import'./login.css'
import'./login.js'
import GoogleImg from '../../image/google.png' 
import { Link } from "react-router-dom";

export default function Login() {
   return (
      <>
         <div className="login-container">
            <div className="login-card">
               <form id="formularioLogin" className="input-class" onsubmit="return login()">
                  <h2 className="title-login">Faça o seu login</h2>
                  <label className="label-login">Email:</label>
                  <input type="text" id="login-username" placeholder="exemplo@gmail.com" required />
                  <label className="label-login">Senha:</label>
                  <input type="password" id="login-password" placeholder="Digite sua senha..." required />
                  <button type="submit" className="" onClick={login}>Entrar</button>
                  <button type="submit" className="bg-google"> <img className="img-input" src={GoogleImg} /> Continue com
                     Google</button>
                  <div className="texto-redir">Ainda não tem uma conta? <a href="#" onClick={MostrarRegistro}>Faça seu
                     cadastro</a></div>
               </form>
               <form id="formularioRegistro" className="input-class" onsubmit="return registrar()">
                  <h2 className="title-login">Faça o seu Cadastro</h2>

                  <label className="label-login">Usuario:</label>
                  <input type="text" id="Registrar-username" placeholder="Digite seu usuario..." required />
                  <label className="label-login">Email:</label>
                  <input type="email" id="Registrar-email" placeholder="exemplo@gmail.com" required />
                  <label className="label-login">Senha:</label>
                  <input type="password" id="Registrar-password" placeholder="Digite sua senha..." required />
                  <button type="submit" className="secondary-bg secondary-bg-hover"
                      onClick={registrar}>Cadastrar</button>

                  <div className="texto-redir">Ja tem uma conta? <a href="#" onClick={MostrarLogin}>Faça seu
                     Login</a></div>

               </form>
            </div>
         </div>
      </>

   )


}
