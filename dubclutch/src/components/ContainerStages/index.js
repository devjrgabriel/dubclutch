import './stages.css';

export const ContainerStages = () => {
    return (
        <>
            <section className="sectionStage">
                <div className="containerStages">
                    <p className='stageP'>
                        <span>Stage</span>, o que é?
                    </p>
                    <p className="stageQ">
                        Os "Stages" como são popularmente chamados, são literalmente, estágios de preparação de veículos, avançando cada vez mais conforme os niveis conforme os niveis do stage "instalado".
                    </p>
                </div>

                <div className="containerStagecard1 ">
                    <div className="cardsStagesection">
                        <div className="textcardStageSection2">
                            <p className="titleStagecards">Stage <span>1</span></p>
                            <p className="subtituloStagecards">O mais básico dos stages conta somente com a parte da reprogramação do software que cuida das estrategias da ECU do carro.</p>

                        </div>
                    </div>

                    <div className="cardsStagesection">
                        <div className="textcardStageSection2">
                            <p className="titleStagecards">Stage <span>2</span></p>
                            <p className="subtituloStagecards">O mais popular entre eles por conta do custo beneficio que oferece conta com:<br />
                                Remap<br />
                                Troca do filtro de ar por um filtro de ar esportivo (opcional)<br />
                                Troca do downpipe por um com polegada maior<br />
                                Troca das velas por velas mais frias (opcional)<br />
                                Troca das bobinas (opcional)<br />
                                Instalação de Blow-off (opcional)<br />
                            </p>
                        </div>
                    </div>

                    <div className="cardsStagesection">
                        <div className="textcardStageSection2">
                            <p className="titleStagecards">Stage <span>3</span></p>
                            <p className="subtituloStagecards">Stage 3 - O stage 3 é a combinação dos outros 2 stages, com algumas coisinhas a mais pra ganho de potencia como:<br />
                                Troca da turbina por uma turbina de maior eficiência<br />
                                Instalação de Wastegate (opcional)<br />
                                Troca dos bicos de injeção(opcional) <br />
                                Instalação de sistema surge-tank (opcional)<br />
                                Escape full (opcional)<br />
                            </p>
                        </div>
                    </div>

                    <div className="cardsStagesection">
                        <div className="textcardStageSection2">
                            <p className="titleStagecards">Stage <span>4</span></p>
                            <p className="subtituloStagecards">Stage 4 - Esse é o nivel mais avançado e aprimorado, com troca dos componentes internos do motor para maior resistencia de potencia, assim podendo ter mais cavalos de potencia e torque.<br />
                                Troca de biela. Original para Forjada<br />
                                Troca de pistão. Original para Forjado<br />
                                Prisioneiros de cabeçote forjados (depende do motor)<br />
                                Cabeçote refeito (depende do projeto)<br />
                                Coletor tubular (opcional)<br />
                            </p>
                        </div>
                    </div>


                </div>

            </section>

        </>
    )
}