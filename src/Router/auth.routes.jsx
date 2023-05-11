import { Routes, Route} from "react-router-dom";

import Login from "../PagesLogin/Login";
import Cadastro from "../PagesLogin/Cadastro";


export default function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Cadastro" element={<Cadastro />} />
        </Routes>
    );
}
