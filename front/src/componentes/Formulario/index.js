import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () => {

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                
                <CampoTexto obrigatorio={true} label="Marca:" placeholder="Digite a marca" />
                <label for="status">O status de venda do veículo: </label>
                <select name="status" id="status">
                <option value="Disponivel">Disponível</option>
                <option value="Em Andamento">Em Andamento</option>
                <option value="Vendido">Vendido</option>
                </select>

                <br />

                <label for="cor">A cor do veiculo: </label>
                <select name="cor" id="cor">
                <option value="preto">Preto</option>
                <option value="branco">Branco</option>
                <option value="azul">Azul</option>
                <option value="prata">Prata</option>
                <option value="cinza">Cinza</option>
                <option value="vermelho">Vermelho</option>
                <option value="vinho">Vinho</option>
                </select>

                <CampoTexto obrigatorio={true} label="Valor:" placeholder="Digite o id do valor" />

                <CampoTexto obrigatorio={true} label="Gasto:" placeholder="Digite o id do gasto" />

                <CampoTexto obrigatorio={true} label="Id:" placeholder="Digite o id do veiculo" />

                <div className="Botao-Container">  
                <Botao>
                    Inserir
                </Botao>
                </div>
            </form>
        </section>
    )
}

export default Formulario