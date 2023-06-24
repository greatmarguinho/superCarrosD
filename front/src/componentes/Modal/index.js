import "./Modal.css";

export const Modal = () => {
    return (
        <div className="modal-container">
            <div className="modal">
<form>
    <div className="form-group">
        <label htmlFor="carro">Carro</label>
        <input name="carro" />
    </div>
    <div className="form-group">
        <label htmlFor="ano">Ano</label>
        <input name="ano" />
    </div>
    <div className="form-group">
        <label htmlFor="valorPago">Valor Pago</label>
        <input name="valorPago" />
    </div>
    <div className="form-group">
        <label htmlFor="valorGasto">Valor Gasto</label>
        <input name="valorGasto" />
    </div>
    <div className="form-group">
        <label htmlFor="valorVenda">Valor de Venda</label>
        <input name="valorVenda" />
    </div>
   <button type="submit" className="btn">Confirmar Edição</button> 
</form>
            </div>
        </div>
    );
};