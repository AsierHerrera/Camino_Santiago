// App.jsx
import React, { useState } from 'react';
import './App.css';
import MapWithRoutes from './components/Map/MapWithRoutes';
import Login from "./components/login/Login"; 
import Buttons from './components/rutebotton/rutebotton';
import Navbar from './components/navbar/navbar';
import routes from './components/Map/routes.jsx';
import './styles/styles.css';
import FormularioAnfitriones from './components/FormularioAnfitriones/FormularioAnfitriones';

function App() {
  const [selectedRoute, setSelectedRoute] = useState(routes.caminoFrancesCoordinates);
  const [camino, setCamino] = useState('Camino Francés');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState('map');

  const handleRouteChange = (routeLabel) => {
    switch (routeLabel) {
      case 'Camino Francés':
        setCamino("Camino Francés");
        setSelectedRoute(routes.caminoFrancesCoordinates);
        break;
      case 'Camino Primitivo':
        setCamino("Camino Primitivo");
        setSelectedRoute(routes.caminoPrimitivoCoordinates);
        break;
      case 'Camino del Norte':
        setCamino("Camino del Norte");
        setSelectedRoute(routes.caminoNorteCoordinates);
        break;
      case 'Via de la Plata':
        setCamino("Via de la Plata");
        setSelectedRoute(routes.viaDeLaPlataCoordinates);
        break;
      case 'Camino Sanabrés':
        setCamino("Camino Sanabrés");
        setSelectedRoute(routes.caminoSanabresCoordinates);
        break;
      case 'Camino Vasco':
        setCamino("Camino Vasco");
        setSelectedRoute(routes.caminoVascoCoordinates);
        break;
      case 'Camino Portugués':
        setCamino("Camino Portugués");
        setSelectedRoute(routes.caminoPortuguesCoordinates);
        break;
      case 'Camino Catalán por San Juan de la Peña':
        setCamino("Camino Catalán por San Juan de la Peña");
        setSelectedRoute(routes.caminoCatalanCoordinates);
        break;
      case 'Camino Baztanés':
        setCamino("Camino Baztanés");
        setSelectedRoute(routes.caminoBaztanesCoordinates);
        break;
      case 'Camino Inglés':
        setCamino("Camino Inglés");
        setSelectedRoute(routes.caminoInglesCoordinates);
        break;
      case 'Camino de San Salvador':
        setCamino("Camino de San Salvador");
        setSelectedRoute(routes.caminoSanSalvadorCoordinates);
        break;
      case 'Epílogo a Fisterra y Muxía':
        setCamino("Epílogo a Fisterra y Muxía");
        setSelectedRoute(routes.epilogoFisterraMuxiaCoordinates);
        break;
      default:
        setSelectedRoute(routes.caminoFrancesCoordinates);
    }
  };

  const handleAlbergueClick = (camino) => {
    handleRouteChange(camino); // Cambia la ruta según el albergue
    setCurrentView('map'); // Cambia la vista al mapa
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  return (
    <>
      <div>
        <Navbar onViewChange={handleViewChange} />
        {!isAuthenticated ? (
          <>
            <h1>Inicia Sesion</h1>
            <Login onLogin={handleLogin} />
          </>
        ) : (
          <>
            {currentView === 'map' && (
              <article className="map-outer">
                <h2>{camino}</h2>
                <p className='texto'> 
                   Descubre las rutas del Camino de Santiago y explora los albergues disponibles a lo largo del recorrido. 
                  <br />
                  Al hacer clic en un marcador, podrás ver una descripción detallada de cada alojamiento, <br />incluyendo información útil para planificar tu viaje y asegurarte de encontrar el lugar perfecto para descansar.
                </p> 
                <MapWithRoutes coordinates={selectedRoute} camino={camino} />
                <Buttons onRouteChange={handleRouteChange} />
              </article>
            )}
            {currentView === 'register' && (
              
              <section>
                <FormularioAnfitriones />
                <p className='texto'> 
                  Registra tu propio alojamiento aquí y compártelo con la comunidad. 
                  <br />
                  Una vez que envíes el formulario, tu alojamiento aparecerá en el mapa para que otros peregrinos puedan verlo y conocer más sobre él.
                </p>
              </section>
            )}
            {currentView === 'grid' && (
              <section>
                <Grid onAlbergueClick={handleAlbergueClick} />
              </section>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default App;