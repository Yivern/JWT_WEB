import { Routes, Route } from "react-router-dom"
import Inicio from "./web/inicio"
import IniciarSesion from "./web/iniciarSesion"
import Perfil from "./web/perfil"
import Existe from "./web/existe"
import ServerError from "./web/servernotfound"
import Registro from "./web/registro"


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Inicio />} ></Route>
                <Route path="inicio-sesion" element={<IniciarSesion />}></Route>
                <Route path="perfil" element={<Perfil />}></Route>
                <Route path="serverError" element={<ServerError />}></Route>
                <Route path="*" element={<Existe/>}></Route>
                <Route path="registro" element={<Registro/>}></Route>
            </Routes>
        </div>
    );
}

export default App;