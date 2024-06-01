import './footer.css'
import Dub from '../../image/DUBCLUTCH.png'
export function Footer() {
    return (
        <>
            <div className="ConteinerFooter">
                    <img src={Dub} className="ImagemFooter"/>
                <div className="ItemsFooter">
                    <div className="cont1">
                    <div className='conteudo1'>
                            <span className='TituloConteudo'>Visite</span>
                            <span className='SubTituloConteudo'>Mais visitados</span>
                            <span className='SubTituloConteudo'>Posts Recomenados</span>
                            <span className='SubTituloConteudo'>Sobre</span>
                        </div>
                        <div className='conteudo1'>
                            <span className='TituloConteudo'>Contas</span>
                            <span className='SubTituloConteudo'>Cadastre-se</span>
                            <span className='SubTituloConteudo'>Minha Conta</span>
                            <span className='SubTituloConteudo'>Login</span>
                        </div>
                    </div>
                    <div className="icons"></div>
                    <div className="cont2"></div>

                </div>

            </div>
        </>
    )

}