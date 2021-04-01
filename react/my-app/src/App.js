import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Bienvenidos al paquete CRA!
        </h1>
        <p>
          Se trata de una app generica: "create-react-app" la cual puedes descargar usando el siguiente comando desde tu terminal: <code>npm i create-react-app 'nombre de la app'</code><br/>
          Primero debes descargar node.js en tu computadora para usar el gestor de paquetes de Javascript, NPM.<br/>
          A partir de ahora, desarrollaremos una landing page, para conocer mejor las caracteristicas que nos ofrece React al momento de usarla para construir aplicaciones en el lado del frontend.<br/>
        </p>
        <h2>
          ¿Como vamos a usar esta aplicación?
        </h2>
        <p>
          Les sugiero que usemos git y github, antes que empezar descargando desde npm este paquete. Con git y github, también pondremos en práctica nuestras habilidades con esas herramientas, puede costar un poco, pero valdrá la pena.
        </p>
        <p>
          Deseo que todos puedan disfrutar de esta experiencia. Yo, he dado ya mis primeros pasos en React, sin embargo el camino por recorrer en mi ruta de aprendizaje sigue siendo largo. Es mi primera vez trabajando con un equipo, así que también estrenaré varios comandos de github. Espero poder guiarlos durante sus primeros pasos en React, y así podamos transcurrir juntos por la ruta de aprendizaje que nos depara esta tecnología. 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
