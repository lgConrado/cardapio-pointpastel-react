import { Route, Routes } from "react-router-dom";
import PaginaPadrao from "../pages/PaginaPadrao";
import PaginaCardapio from "../pages/PaginaCardapio";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<PaginaPadrao />}>
        <Route path="cardapio" element={<PaginaCardapio />} />
      </Route>
    </Routes>
  );
};

export default Rotas;
