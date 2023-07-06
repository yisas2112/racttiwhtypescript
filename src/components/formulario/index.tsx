import useForm from '../../hooks/useForm'

interface ForData  {
  email: string, 
  nombre : string,
  edad : number
}

const Formulario = () => {
  const {email, nombre,formulario, handleChange} = useForm<ForData>({
    email: '',
    nombre : '',
    edad : 0
  });
 
  return (
    <form autoComplete='off'>
      <div className='mb-3'>
        <label className='form-label' htmlFor="">Email:</label>
        <input onChange={handleChange} value={email} className='form-control' name='email' type="email" />
      </div>
      <div className='mb-3'>
        <label className='form-label' htmlFor="">Nombre Completo:</label>
        <input onChange={handleChange} value={nombre} className='form-control' name='nombre' type="text" />
      </div>
      <pre>{JSON.stringify(formulario)}</pre>
    </form>

  )
}

export default Formulario
