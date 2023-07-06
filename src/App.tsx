import ContadorRed from "./components/contadorRed";
import Counter from "./components/counter";
import Formulario from "./components/formulario";
import TimerPadre from "./components/timerPadre";
import Usuario from "./usuario";
function App() {
  
  return <>
            <h1>Hola TS</h1>
            <Counter/>
            <Usuario/>
            <h2>useEffect - useRef</h2>
            <hr />
            <TimerPadre/>
            <h2>Use Reducer</h2>
            <hr />
            <ContadorRed/>
            <h2>Custom Hooks</h2>
            <hr />
            <Formulario/>
  
          </>
}

export default App
