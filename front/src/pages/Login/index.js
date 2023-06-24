import Botao from '../../componentes/Botao';
import CampoTexto from '../../componentes/CampoTexto';
import styles from './Login.module.css';
import axios from 'axios';
import TokenContext from '../../auth';
import React from 'react';

function Login() {
    const tokenContext = React.useContext(TokenContext);
    const loginAction = () => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const data = {
            email: username,
            senha: password
        };

        axios.post('http://localhost:3333/api/login', data)
            .then(response => {
                console.log(response.data);
                const token = response.data.access_token;
                console.log(token);
        
                // Set the token in the context
                tokenContext.setToken(token);
                localStorage.setItem('token', token);
            })
            .catch(error => {
                console.error(error);
                // Handle the error here
            });
            
    };

    return (
        <section className={styles.login}>
            <CampoTexto obrigatorio={true} label="Login:" placeholder="Login" id="username" />
            <CampoTexto obrigatorio={true} label="Senha:" placeholder="Senha" id="password" />
            <Botao id="loginButton" onClick={loginAction}>Entrar</Botao>
        </section>
    );
}

export default Login;