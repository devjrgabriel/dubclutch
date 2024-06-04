import { Link } from "react-router-dom";
import ImagemNavbar from '../../image/DUBCLUTCH.png';
import './header.css';


export function Header() {
    return (

        <nav className="navbar">
            <div className="logoNavbar">
                <img src={ImagemNavbar} />
            </div>

            <div>
                <Link className="item-nav active" to="/Home">Home</Link>
                <Link className="item-nav" to="/Stages" >Teste</Link>
            </div>
            <div>
                <button className="botaoNavbar">
                    <Link to="/">Entrar</Link>
                    </button>
            </div>
        </nav>

    )
}