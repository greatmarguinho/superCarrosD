import styles from './Localizacoes.module.css';

function Localizacoes() {
    return (
        <section className={styles.localizacoes}>
            <h1>SUPER CARROS</h1>

            <p>  A <span className={styles.superCarros}>Super Carros</span> atua no mercado automobilistico, caracterizada por ser<br></br> uma empresa sólida,
                 de tradição, que conjuga excelência no<br></br> atendimento e veículos com rigorosa qualidade,
                 com o objetivo único<br></br> de tornar real o sonho de cada cliente.</p>

            <h2 >Localizações</h2>
            <div>
            <p>
                Super Carros 1 <br />
                Seg-Sex: 09:00 às 18:00<br />
                Sáb: 09:00 às 12:00<br /> <br />

                Rua Intendente João Nunes Vieira, 580<br />
                Ingleses do Rio Vermelho - Florianópolis/SC<br />
            </p>

            <p>
                Super Carros 2<br />
                Seg-Sex: 09:00 às 18:00<br />
                Sáb: 09:00 às 12:00<br /> <br />

                Rod. Armando Calil Bulos, 410<br />
                Vargem Grande - Florianópolis/SC<br />
            </p>
            </div>
            
        </section>
    )
}

export default Localizacoes;