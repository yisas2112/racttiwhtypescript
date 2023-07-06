import { useReducer } from "react";

const initialState = {
  contador : 0
}

enum CountActionKind {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
}

type ActionType = {type: CountActionKind}

const contadorReducer= (state: typeof initialState, action: ActionType)=>{
  switch(action.type){
    case CountActionKind.INCREASE:
      return {
        ...state,
        contador : state.contador +1
      }
    case CountActionKind.DECREASE:
      return {
        ...state,
        contador : state.contador -1
      }

      default:
        return state;
  }

}

const ContadorRed = () => {
  const [contadorState, dispatch] = useReducer(contadorReducer, initialState)
  return (
    <div>
      <h2>Contador: {contadorState.contador}</h2>
      <button onClick={()=> dispatch({type: CountActionKind.INCREASE})} className="btn btn-outline-primary">+1</button>
      <button onClick={()=> dispatch({type: CountActionKind.DECREASE})} className="btn btn-outline-primary">-1</button>
    </div>
  )
}

export default ContadorRed
