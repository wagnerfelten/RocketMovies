import { Routes, Route} from "react-router-dom";

import Home from "../pages/Home";
import Perfil from "../pages/Perfil";
import CreateMovie from "../pages/CreateMovie";
import MoviePreview from "../pages/MoviePreview";
import Login from "../PagesLogin/Login";
import Cadastro from "../PagesLogin/Cadastro";


export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Cadastro" element={<Cadastro />} />
            <Route path="/home" element={<Home />}/>
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/createMoview" element={<CreateMovie />} />
            <Route path="/moviePreview" element={<MoviePreview />} />
        </Routes>
    );
}
