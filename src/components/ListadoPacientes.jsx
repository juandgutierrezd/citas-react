import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes,setPaciente,eliminarPaciente}) => {

  return (
        <div className="md:w-1/2 lg:3/5 bg-indigo-300 md:h-screen overflow-y-scroll">
            {pacientes && pacientes.length ?
            <>
           <h2 className='text-center font-black text-3xl'>Listado Pacientes</h2>
            <p className="mt-2 text-center font-bold">
              Administra tus{' '}
              <span className="text-orange-500 font-bold">Pacientes y Citas</span>
            </p>

           {pacientes.map(pacienteTemporal=>(
            <Paciente
              key={pacienteTemporal.id}
              paciente={pacienteTemporal}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
           ))}
            </>
            :(
              <>
              <h2 className='text-center font-black text-3xl'>No hay Pacientes</h2>
              <p className="mt-2 text-center font-bold">
              Añade tus {' '}
              <span className="text-orange-500 font-bold"> Pacientes y Citas</span>
            </p>
              </>
            )}
           
        </div>    
  )
}

export default ListadoPacientes