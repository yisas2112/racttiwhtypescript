import React, { ChangeEvent, useState } from 'react'


const useForm = <T extends Object>(initSate : T) => {
  const [formulario, setFormulario] = useState(initSate)

  const handleChange = ({target} : ChangeEvent<HTMLInputElement>)=>{
    const { name, value } = target;

    setFormulario({
      ...formulario,
      [name] : value
    })
    
  }

  return {
    formulario, 
    handleChange,
    ...formulario
  }
}

export default useForm
