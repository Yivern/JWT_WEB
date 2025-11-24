import { Link } from 'react-router-dom';

function errorServer(){
    return(
    <>
        <head>
            <title>ERROR 404</title>
        </head>
        <div className= 'main'>
            <h1>RECURSO NO ENCONTRADO</h1>
            <p>El recurso al que intentas acceder no existe</p>
            <Link className='animacion' to='/'>Pagina principal</Link>
        </div>
    </>
    )
}

export default errorServer;