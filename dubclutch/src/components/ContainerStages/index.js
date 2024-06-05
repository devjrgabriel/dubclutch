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
                            <p className="subtituloStagecards">O mais popular entre eles por conta do custo beneficio que oferece conta com:<br/>
                            <ul>
                                <li><span className='bolinha'>• </span>Remap</li>
                                <li><span className='bolinha'>• </span> Troca do filtro de ar por um filtro de ar esportivo (opcional)</li>
                                <li><span className='bolinha'>• </span> Troca do downpipe por um com polegada maior</li>
                                <li><span className='bolinha'>• </span> Troca das velas por velas mais frias (opcional)</li>
                                <li><span className='bolinha'>• </span> Troca das bobinas (opcional)</li>
                                <li><span className='bolinha'>• </span> Instalação de Blow-off (opcional)</li>
                            </ul>
                            </p>
                        </div>
                    </div>

                    <div className="cardsStagesection">
                        <div className="textcardStageSection2">
                            <p className="titleStagecards">Stage <span>3</span></p>
                            <p className="subtituloStagecards">O stage 3 é a combinação dos outros 2 stages, com algumas coisinhas a mais pra ganho de potencia como:<br />
                            <ul>
                            <li><span className='bolinha'>• </span>Troca da turbina por uma turbina de maior eficiência</li>
                            <li><span className='bolinha'>• </span>Instalação de Wastegate (opcional)</li>
                            <li><span className='bolinha'>• </span>Troca dos bicos de injeção(opcional)</li>
                            <li><span className='bolinha'>• </span>Instalação de sistema surge-tank (opcional)</li>
                            <li><span className='bolinha'>• </span>Escape full (opcional)</li>
                            </ul>
                            </p>
                        </div>
                    </div>

                    <div className="cardsStagesection">
                        <div className="textcardStageSection2">
                            <p className="titleStagecards">Stage <span>4</span></p>
                            <p className="subtituloStagecards">Esse é o nivel mais avançado e aprimorado, com troca dos componentes internos do motor para maior resistencia de potencia, assim podendo ter mais cavalos de potencia e torque.<br />
                            <ul>
                                <li><span className='bolinha'>• </span>Troca de biela. Original para Forjada</li>
                                <li><span className='bolinha'>• </span>Troca de pistão. Original para Forjado</li>
                                <li><span className='bolinha'>• </span>Prisioneiros de cabeçote forjados (depende do motor)</li>
                                <li><span className='bolinha'>• </span>Cabeçote refeito (depende do projeto)</li>
                                <li><span className='bolinha'>• </span>Coletor tubular (opcional)</li>
                            </ul>
                            </p>
                        </div>
                    </div>


                </div>

            </section>

        </>
    )
}