import React from 'react'
import styles from './Tabela.module.css';
import lapis from './lapis.svg'
import lixeira from './lixeira.svg'
import { getColorLabel } from '../../Utils/switchColor';
import { getStatusLabel } from '../../Utils/switchStatus';

export const Table = ({ data }) => {


  
  return (
    <div className={styles.tableWraper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Carro</th>
            <th>Cor</th>
            <th>Valor Pago</th>
            <th>Status</th>
            <th className={styles.expand}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.nome}</td>
              <td>{getColorLabel(item.id_cor)}</td>
              <td>{item.id_valor}</td>
              <td>{getStatusLabel(item.status)}</td>
              <td>
                <span className={styles.actions}>
                  <img src={lapis} alt="Logo de lapis" />
                  <img
                    src={lixeira}
                    alt="Logo de lixeira"
                    className={styles.deleteBtn}
                  />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};  