const Paciente = ({paciente,setPaciente,eliminarPaciente}) => {
  //Aplicamos destruring object al objecto paciente
  const {nombre,propietario,email,fecha,sintomas} = paciente

    //Eliminarr Paciente
    const handleEliminar=(()=>{
      const respuesta= confirm('Deseas Eliminar Paciente');

      if(respuesta){
        eliminarPaciente(id);
      }
    })
  return (
         <div className='m-2 bg-white shadow-md px-5 py-6  rounded-xl'>
              <p className='font-bold mb-2 text-gray-700 uppercase'>Nombre:{' '}
                <span className='font-normal normal-case'>{nombre}</span>
              </p>
              <p className='font-bold mb-2 text-gray-700 uppercase'>Propietario:{' '}
                <span className='font-normal normal-case'>{propietario}</span>
              </p>
              <p className='font-bold mb-2 text-gray-700 uppercase'>Email:{' '}
                <span className='font-normal normal-case'>{email}</span>
              </p>
              <p className='font-bold mb-2 text-gray-700 uppercase'>Fecha Alta:{' '}
                <span className='font-normal normal-case'>{fecha}</span>
              </p>
              <p className='font-bold mb-2 text-gray-700 uppercase'>Sintomas:{' '}
                <span className='font-normal normal-case'>{sintomas}</span>
              </p>

              <div className="mt-6 flex justify-between">
                <button
                  type="button"
                  className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold
                  uppercase rounded-lg"
                  onClick={/*Tiene que tener un arrow function para que no se ejecute*/ 
                    ()=>setPaciente(paciente)
                  }>
                  Editar
                </button>

                <button
                  type="button"
                  className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold
                  uppercase rounded-lg"
                  onClick={handleEliminar}
                  >
                  Eliminar
                </button>
              </div>
            </div>
  )
}

export default Paciente