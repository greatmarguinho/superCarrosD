import { Link } from 'react-router-dom';
import logo from './logo.svg';
import styles from './Cabecalho.module.css';
import CabecalhoLink from '../CabecalhoLInk';

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt="Logo do supercarros"></img>
            </Link>
            <nav className={styles.containerNav}>
                <CabecalhoLink url="./Estoque">
                    Estoque
                </CabecalhoLink>
                <CabecalhoLink url="./Contato">
                    Contato
                </CabecalhoLink>
                <CabecalhoLink url="./Login">
                    Login
                </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho;