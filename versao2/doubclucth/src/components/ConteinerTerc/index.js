import setas from '../../image/setas.png';
import './home1.css';


export const ConteinerTerc = () => {
    return (
        <section class="section3">
        <div class="div1secti">
            <div class="containerTextos3">
                <span class="title4">Descobrir</span>
                <span class="Subtitulo3">Alguns de nossos posts mais acessados</span>
            </div>
            <div class="containerbotao">
                <button type="button" class="stylebtnsec2"><img src={setas} class="iconSetas" alt=""/>
                </button>
                <button type="button" class="stylebtnsec2"><img src={setas} class="iconSetas seta2" alt=""/>
                </button>
            </div>

        </div>
        <div class="containercard1section3">
            <div class="cardssection3 bkcard1">
                <span class="titlecardsection3">Stages</span>
            </div>
            <div class="cardssection3 bkcard2">
                <span class="titlecardsection3">Dinamômetro</span>
            </div>
            <div class="cardssection3 bkcard3">
                <span class="titlecardsection3">Rodas</span>
            </div>
            <div class="cardssection3 bkcard4">
                <span class="titlecardsection3">Mitos e Verdades</span>
            </div>
        </div>


    </section>

    )
}