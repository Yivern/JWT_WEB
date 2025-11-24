import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import atras from '../img/atras.png';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Registro() {

    const [loadingMessage, setLoadingMessage] = useState(false)
    const [serverError, setServerError] = useState(false);
    const [passError, setPassError] = useState(false);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [shown, setShown] = useState(false);
    const [icon, setIcon] = useState(eyeOff);

    const [confShown, setConfShown] = useState(false);
    const [confIcon, setConfIcon] = useState(eyeOff);
    const [loggedIn, setLoggedIn] = useState(false);

    const switchShown = () => {
        setShown(!shown);
        setIcon(shown ? eyeOff : eye);
    };

    const switchShownConf = () => {
        setConfShown(!confShown);
        setConfIcon(confShown ? eyeOff : eye);
    };

    const onSubmit = (data) => {
        setServerError(false)
        setPassError(false)
        if (data.password === data.confPassword) {
            setLoadingMessage(true)
            axios.post('http://localhost:3001/users/register', {
                user: data.username,
                pass: data.password
            })
                .then(function (response) {
                    if (response.status === 200) {
                        setLoadingMessage(false)
                        console.log(response.data)
                        console.log('TOKEN VALIDO')
                        console.log(response.data.result.token)

                        localStorage.setItem('username', data.username);
                        localStorage.setItem('token', response.data.result.token);
                        setLoggedIn(true);
                        navigate(`/perfil`);
                    } else {
                        setLoadingMessage(false)
                    }
                })
                .catch(function (response) {
                    console.log(response)
                    if (response.code === "ERR_NETWORK") {
                        setLoadingMessage(false)
                        return setServerError(true)
                    }
                    if (response.response.status === 404) {
                        setServerError(false)
                        console.log("El endpoint al que desea acceder no existe.")
                        navigate(`/serverError`)
                    }
                    if (response.response.status === 422) {
                        setLoadingMessage(false)
                        setServerError(false)
                        console.log(response.response.data)
                        console.log('TOKEN INVALIDO')
                        console.log(response.response.data.result.token)
                    }
                    setLoadingMessage(false)
                });
        } else {
            setPassError(true)
        }
    };

    useEffect(() => {
        const logged = localStorage.getItem('username');
        if (logged) {
            setLoggedIn(true);
        }
    }, []);

    return (
        loggedIn ? (
            <>
                <head>
                    <title>Ya estas iniciado</title>
                </head>
                <div className='iniciado'>
                    <div className='header'>
                        <button className='atras' onClick={() => navigate('../')}>
                            <img src={atras} className='atras' alt='Volver' />
                        </button>
                        <h2>Hola!</h2>
                    </div>
                    <p>Al parecer ya has iniciado sesión.</p>
                </div>
            </>
        ) : (<>
            <head>
                <title>Registro</title>
            </head>
            <div className='contenedor-inicio'>
                <div className='content-formulario'>
                    <div className='encabezado-formulario'>
                        <button className='atras' onClick={() => navigate('../')}>
                            <img src={atras} className='atras' alt='Volver' />
                        </button>
                        <h2>Registrate</h2>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor='name'> Nombre de usuario: </label>
                        <input
                            type="text"
                            className={`campo ${errors.username ? 'error' : ''}`}
                            name="username"
                            placeholder='Usuario'
                            {...register("username", { required: true })}
                        />
                        {errors.username && <span className='error'>Este campo es obligatorio</span>}
                        <label> Contraseña: </label>
                        <div className='campocontra'>
                            <input
                                type={shown ? 'text' : 'password'}
                                className={`campo ${errors.password ? 'error' : ''}`}
                                name='password'
                                placeholder='Contraseña'
                                {...register("password", { required: true })}
                            />
                            <span className="ojo" onClick={switchShown}>
                                <Icon className="absolute mr-10" icon={icon} size={25} />
                            </span>
                        </div>
                        {errors.password && <span className='error'>Este campo es obligatorio</span>}
                        <label> Confirmar Contraseña: </label>
                        <div className='campocontra'>
                            <input
                                type={confShown ? 'text' : 'password'}
                                className={`campo ${errors.password ? 'error' : ''}`}
                                name='password'
                                placeholder='Contraseña'
                                {...register("confPassword", { required: true })}
                            />
                            <span className="ojo" onClick={switchShownConf}>
                                <Icon className="absolute mr-10" icon={confIcon} size={25} />
                            </span>
                        </div>
                        {errors.confPassword && <span className='error'>Este campo es obligatorio</span>}
                        <button type='submit' className='boton'>Registrate! </button>
                    </form>
                </div>
                {loadingMessage && (
                    <p>Validando...</p>
                )}
                {passError && (
                    <p className='error'>Las contraseñas no coinciden</p>
                )}
                {serverError && (<>
                    <p className='error'>El servidor no se encuentra en funcionamiento</p>
                    <p className='error'>Intentelo de nuevo mas tarde.</p>
                </>
                )}
            </div>
        </>
        )
    );
}

export default Registro;
