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
                <Link className="item-nav active" to="/">Home</Link>
                <Link className="item-nav" to="/" >Stages</Link>
                <Link className="item-nav" to="/" >Onde comprar</Link>
            </div>
            <div>
                <button className="botaoNavbar">
                    <Link to="/Login">
                        Entrar
                    </Link>
                </button>
            </div>
        </nav>

    )
}