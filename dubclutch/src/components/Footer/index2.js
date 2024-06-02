import './footer2.css'
import Dub from '../../image/DUBCLUTCH-light.png'
import Facebook from '../../image/IconFacebook-light.png'
import Tiktok from '../../image/iconTikTok-light.png'
import Twitter from '../../image/IconTwitter-light.png'
import Youtube from '../../image/iconYoutube-light.png'
export function Footer() {
    return (
        <>
            <div className="ConteinerFooter">
                <img src={Dub} className="ImagemFooter" />
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
                    <div className="icons">
                        <img className='IconFooter' src={Facebook}/>
                        <img className='IconFooter' src={Tiktok}/>
                        <img className='IconFooter' src={Twitter}/>
                        <img className='IconFooter' src={Youtube}/>

                    </div>
                    <div className="navFooter">
                        <span className='infoFooter'>@2024 DubClutch</span>
                        <span className='infoFooter'>Cookies</span>
                        <span className='infoFooter'>Termos e condições</span>
                        <span className='infoFooter'>Politica de privacidade</span>
                    </div>

                </div>

            </div>
        </>
    )

}