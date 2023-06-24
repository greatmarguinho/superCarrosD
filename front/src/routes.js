import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Cabecalho from "./componentes/Cabecalho";
import Contato from "./pages/Contato";
import Insercao from "./pages/Insercao";
import Login from "./pages/Login";
import Estoque from "./pages/Estoque";

function AppRoutes() {
 return (
    <BrowserRouter>
    <Cabecalho/>
    <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/contato" element={<Contato/>}></Route>
        <Route path="/insercao" element={<Insercao/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/estoque" element={<Estoque/>}></Route>
    </Routes>
    </BrowserRouter>
 )
}
export default AppRoutes;