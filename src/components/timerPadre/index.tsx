import { useState } from "react"
import Timer from "../timer"

const TimerPadre = () => {
  const [milisegundos, setMilisegundos ] = useState(1000);
  return (
          <>
            <span>Milisegundos {milisegundos}</span>
            <button onClick={()=>setMilisegundos(1000)}  className="btn btn-outline-success">1000</button>
            <button onClick={()=>setMilisegundos(2000)} className="btn btn-outline-success">2000</button>
            <Timer milisegundos={milisegundos}/>
          </>
  )
}

export default TimerPadre
