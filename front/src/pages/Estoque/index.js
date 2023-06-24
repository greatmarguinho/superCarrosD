import Botao from '../../componentes/Botao';
import { Table } from '../../componentes/Tabela';
import styles from './Estoque.module.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { listVeiculos } from '../../services/veiculos';

function Estoque() {
    const [data, setData] = useState([])
    const getAllVeiculos = async () => {
        const veiculos = await listVeiculos()
        setData(veiculos)
    }

    useEffect(() => {
        getAllVeiculos();
    },[]);
    
    return (
        <div className={styles.estoque}>
            <Table data={data}/>
            <Link to={"../Insercao"}>
                <Botao > Inserir</Botao>
            </Link>
        </div>
    )
}

export default Estoque;