import './Botao.css'

const Botao = (props) => {
    return (<button id={props.id} onClick={props.onClick} className='botao'>
        {props.children}
    </button>)
}
export default Botao