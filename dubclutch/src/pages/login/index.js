import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleImg from '../../image/google.png';
import './login.css';
import './login.js';
import { MostrarLogin, MostrarRegistro, login, registrar } from './login.js';

export const Login = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const navigate = useNavigate();

   const iniciarevento = (event) => {
      event.preventDefault()
      if (email === 'a@com' && password === 'a') {
         alert('Login bem-sucedido!')
         navigate('/Home');
      } else {
         alert('Credenciais invalidas')

      }
   }
   return (
      <>
         <div className="login-container">
            <div className="login-card">
               <form id="formularioLogin" className="input-class" onSubmit={iniciarevento}>
                  <h2 className="title-login">Faça o seu login</h2>
                  <label className="label-login">Email:</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="speedrun@gmail.com" className="inputForm" name="email" id="email" />
                  <label className="label-login">Senha:</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="**********" className="inputForm" name="password" id="password" />
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
