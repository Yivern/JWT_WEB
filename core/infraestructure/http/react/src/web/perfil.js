import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../img/logo.jpeg';
import { faker } from '@faker-js/faker';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import cargaBack from '../img/cargaBack.png'
import cargaAvatar from '../img/cargaAvatar.png'

function Perfil() {
    const usuario = localStorage.getItem('username')
    const navigate = useNavigate()
    const [loggedIn, setLoggedIn] = useState(usuario)

    const cerrarSesion = () => {
        localStorage.removeItem('username')
        localStorage.removeItem('token')
        localStorage.removeItem('logged')
        setLoggedIn(false);
        navigate('/inicio-sesion');
    }

    return (
        loggedIn ? (
            <>
                <head>
                    <title>Perfil de {usuario}</title>
                </head>
                <div className='contenedor'>
                    <nav>
                        <div className='logo'>
                            <img src={Logo} alt='Logo' className='logoProvi' />
                            <h1>Perfil</h1>
                        </div>
                        <div className='cerrar'>
                            <button className='animacion' onClick={cerrarSesion}>Cerrar Sesión</button>
                            <Link className='animacion' to='/'>Inicio</Link>
                        </div>
                    </nav>
                    <main>
                        <div className='contenedor-perfil'>
                            <h1>Informacion Personal</h1>
                            <div className="card">
                                <div className="card__image">
                                    <LazyLoadImage src={faker.image.url()} placeholderSrc={cargaBack} effect = "blur" width={300} height={300}/>
                                </div>
                                <div className="card__profile">
                                    <LazyLoadImage src={faker.image.avatar()} placeholderSrc={cargaAvatar} effect = "blur" width={100} height={100}/>
                                </div>
                                <div className="card__body">
                                    <div>
                                        <h2>Jesus Angarita </h2>
                                        <p>Genero: {faker.person.gender()}</p>
                                    </div>
                                    <p>Teléfono:</p>
                                    <p>{faker.phone.number()}</p>
                                    <p>Direccion:</p>
                                    <p>{faker.location.streetAddress()}, {faker.location.city()}, {faker.location.state()}</p>
                                    <p>Correo electronico:</p>
                                    <p>{faker.internet.email()}</p>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </>
        ) : (
            <>
            <head>
                <title>No puedes acceder</title>
            </head>
                <div className='contenedor-inicio'>
                    <div className='dash-error'>
                        <h1>Debes iniciar sesion para acceder a este apartado.</h1>
                        <Link className='animacion' to='/inicio-sesion'>Iniciar sesión</Link>
                    </div>
                </div>
            </>
        )
    );
}

export default Perfil;