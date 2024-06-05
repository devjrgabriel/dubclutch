import './home1.css';
import car1 from '../../image/car1.png';
import car2 from '../../image/car2.png';
import car3 from '../../image/car3.png';
import cavalo from '../../image/cavalo.png';
export const ConteinerSec = () => {
    return (
        <div className="section2 secao">
            <div className="containerTextos2">
                <span className="title2">Inspirados em <span>nossas</span> dicas!</span>
            </div>
            <div className="containercard1">
                <div className="cardssection">
                    <img src={car1} className="imgcardsection2" />
                    <div className="textcardSection2">
                        <span className="titlecards">Jetta GLI 2023</span>
                        <span className="subtitulocards">Stage 4 - Motor Ea888 - I4</span>
                        <div className="whpstyle">
                            <img className="iconcardcavalo" src={cavalo} />
                            <span className="whpstyletext">500whp</span>
                        </div>
                    </div>
                </div>

                <div className="cardssection align-self">
                    <img src={car2} className='imgcardsection2' />
                    <div className="textcardSection2">
                        <span className="titlecards">BMW 340i</span>
                        <span className="subtitulocards">Stage 2 - Motor B58 - I6</span>
                        <div className="whpstyle">
                            <img className="iconcardcavalo" src={cavalo} />
                            <span className="whpstyletext">510whp</span>
                        </div>
                    </div>
                </div>

                <div className="cardssection">
                    <img src={car3} className="imgcardsection2" />
                    <div className="textcardSection2">
                        <span className="titlecards">Lancer EVO IX</span>
                        <span className="subtitulocards">Stage 2 - Motor 4B11T- I4</span>
                        <div className="whpstyle">
                            <img className="iconcardcavalo" src={cavalo} />
                            <span className="whpstyletext">320whp</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
