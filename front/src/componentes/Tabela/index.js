import React from 'react'
import styles from './Tabela.module.css';
import lapis from './lapis.svg'
import lixeira from './lixeira.svg'

export const Table = () => {
    return (
        <div className={styles.tableWraper}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Carro</th>
                        <th>Ano</th>
                        <th>Cor</th>
                        <th>Valor Pago</th>
                        <th>Valor Gasto</th>
                        <th>Valor Total</th>
                        <th>Valor de Venda</th>
                        <th>Lucro</th>
                        <th className={styles.expand}>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Etios Sedan</td>
                        <td>13</td>
                        <td>laranja</td>
                        <td>R$ 28.000</td>
                        <td>R$ 28.000</td>
                        <td>R$ 28.000</td>
                        <td>R$ 28.000</td>
                        <td>R$ 28.000</td>
                       
                        <td>
                            <span className={styles.actions}>
                                <img src={lapis} alt="Logo de lapis"></img>
                                <img src={lixeira} alt="Logo de lixeira" className={styles.deleteBtn}></img>
                            </span>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>
    )
}