import './home1.css';
import {Link} from "react-router-dom";

export const ConteinerTerc = () => {
    return (
        <section class="secao section3">
            <div class="div1secti">
                <div class="containerTextos3">
                    <span class="title4">Descobrir</span>
                    <span class="Subtitulo3">Alguns de nossos posts mais acessados</span>
                </div>

            </div>
            <div class="containercard1section3">
                <div class="cardssection3 bkcard1 cardssection3anm1">
                <Link to="/Stages" className="titlecardsection3">
                    <span class="titlecardsection3">Stages</span></Link>
                </div>
                <div class="cardssection3 bkcard2 cardssection3anm2">
                    <span class="titlecardsection3">Dinamômetro</span>
                </div>
                <div class="cardssection3 bkcard3 cardssection3anm3">
                    <span class="titlecardsection3">Rodas</span>
                </div>
                <div class="cardssection3 bkcard4 cardssection3anm4">
                    <span class="titlecardsection3">Mitos e Verdades</span>
                </div>
            </div>


        </section>

    )
}