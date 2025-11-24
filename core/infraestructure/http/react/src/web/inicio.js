import { Link } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../img/logo.jpeg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import CargaImg from '../img/imagenCarga.png';
import { faker } from '@faker-js/faker';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Inicio() {
  const usuario = localStorage.getItem('username')
  const [loggedIn, setLoggedIn] = useState(usuario);

  const cerrarSesion = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('token')
    setLoggedIn(false);
  };

  return (
    <>
      <head>
        <title>Bienvenido!</title>
      </head>
      <div className='contenedor'>
        <nav>
          <div className='logo'>
            <img src={Logo} alt='Logo' className='logoProvi' />
            <h1>Sobre Nosotros</h1>
          </div>
          <div className='cerrar'>
            {loggedIn ? (
              <>
                <h2>Hola, {usuario}!</h2>
                <Link className='animacion' onClick={cerrarSesion} to='/inicio-sesion'>Cerrar Sesión</Link>
                <Link className='animacion' to='/perfil'>Perfil</Link>
              </>
            ) : (<>
              <Link className='linksnav' to='/inicio-sesion'>Inicia sesión</Link>
              <Link className='animacion' to='/registro'>Registrate!</Link>
            </>
            )}
          </div>
        </nav>
        <main>
          <div className='main'>
            <h1>Sobre nosotros!</h1>
            <div className='contenido-parrafo'>
              <div className='parrafo'>
                <p>
                  Integer neque sem, pharetra sit amet tempus vitae, tincidunt nec purus. Quisque at lectus et ex vehicula maximus.
                  Integer ullamcorper massa eu ante vestibulum dapibus. Donec at placerat lacus, vulputate varius orci. In hac habitasse platea dictumst.
                </p>
              </div>
              <LazyLoadImage src={faker.image.url()} placeholderSrc={CargaImg} effect="blur" width={642} height={482} />
            </div>
          </div>
          <section>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta mauris et accumsan porttitor.
              Pellentesque quis consequat lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Duis convallis tempus velit. Vivamus posuere ultrices interdum.
              Praesent dictum, elit ut feugiat cursus, lectus augue eleifend justo, in hendrerit felis mi vitae urna.
              Vestibulum eu malesuada turpis. Nunc dapibus ac turpis ac luctus. Fusce hendrerit vel nulla id ultricies.
              Praesent congue tortor tellus, id ultricies libero sagittis quis. Curabitur nec arcu non felis congue ullamcorper.
              Nullam turpis diam, placerat nec maximus at, tempor eu arcu. Mauris pharetra consectetur elit, id blandit tortor pharetra eget.
            </p>
          </section>
          <div className='nosotros'>
            <div>
              <h1>Mision</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam ligula, laoreet eu ultricies ut, faucibus ac metus.
                Cras a interdum elit. Praesent interdum diam nisi, iaculis ullamcorper diam dictum pulvinar.
              </p>
            </div>
            <div>
              <h1>Vision</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue et sem a pretium. Etiam sollicitudin at leo vel ornare.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
              </p>
            </div>
            <div>
              <h1>Propósito</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id sagittis tortor.
                Nullam egestas, quam ut tempus tempus, nisi est vehicula massa, vulputate lobortis ligula quam quis nibh. Fusce dictum justo eu ornare euismod.
                Nulla ultricies, eros ac dignissim tempor, diam purus euismod nulla, quis ultrices lacus nisi et ligula.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Inicio;
