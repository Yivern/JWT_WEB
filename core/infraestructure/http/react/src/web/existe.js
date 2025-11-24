import { Link } from 'react-router-dom';

function errorPagina(){
    return(
    <>
        <head>
            <title>Pagina no encontrada</title>
        </head>
        <div className= 'main'>
            <h1>PAGINA NO ENCONTRADA</h1>
            <Link className='animacion' to='/'>Pagina principal</Link>
        </div>
    </>
    )
}

export default errorPagina;