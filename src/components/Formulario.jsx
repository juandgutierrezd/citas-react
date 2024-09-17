import {useState,useEffect} from "react"
import Error from "./Error";

const Formulario = ({pacientes,setPacientes,paciente,setPaciente}) => {

    //Hooks del fomulario
    const [nombre,setNombre] = useState('');
    const [propietario,setPropietario] = useState('');
    const [email,setEmail] = useState('');
    const [fecha,setFecha] = useState('');
    const [sintomas,setSintomas] = useState('');

    //Hook de error
    const [error,setError] = useState(false);

    //Usando UseEffect
    useEffect(()=>{
        //comprbamos que lo que estemos pasando no esta vacio
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    },[paciente]);

    const generarId = () =>{
        const random = Math.random().toString(36).substring(2);
        const fechaId= Date.now().toString(36);

        return (random+fechaId);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        //Validacion del Formulario
        if([nombre,propietario,email,fecha,sintomas].includes('')){
            console.log("Hay almenos un Campo vacio")
            setError(true)
            return;
        }
        setError(false)

        //Creo Objecto de Paciente
        //Para pasar a App y que se guarde en pacientes[]
        const objectoDePaciente={
            nombre,
            propietario,
            email,
            fecha,
            sintomas
        }

        if(paciente.id){
            //Editando un registro
            objectoDePaciente.id=paciente.id
            const pacientesActualizado = pacientes.map( pacienteState => pacienteState.id ===
                paciente.id ? objectoDePaciente : pacienteState)

                setPacientes(pacientesActualizado)
                setPaciente({})
        }else{
            //NUevo regitro
            //Para no mutar el  arreglo otiginal hacemos una copia de la 
            //variable original
            objectoDePaciente.id=generarId();
            setPacientes([...pacientes,objectoDePaciente])
        }

        //Reiniciando el Formulario
        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');
    }
  return (
    <>
        <div className="md:w-1/2 lg:2/5 mx-5 bg-gray-200 ">
            <h2 className='text-center font-black text-3xl'>Seguimiento de Pacientes</h2>
            <p className="mt-2 text-center font-bold">
                Añade Pacientes y {' '}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form action="" onSubmit={handleSubmit}>
                <div className=" p-5 rounded-md shadow-lg mt-4 bg-white">
                    
                    {error&&<Error><p>todos los campos son obligatorios</p></Error>}

                    <div className="mb-5">
                    <label htmlFor="nombreMascota" className="block  text-gray-700 font-black  uppercase">
                        Nombre Mascota</label>
                        <input 
                            id="nombreMascota"
                            type="text" 
                            placeholder="Nombre de la Mascota"
                            className="p-2 mt-2 mb-2 border-2 w-full placeholder-gray-500 rounded-md"
                            value={nombre}
                            onChange={(e)=> setNombre(e.target.value)}
                        />
                    </div>

                    <div className="mb-5">
                    <label htmlFor="nombrePropietario" className="block  text-gray-700 font-black  uppercase">
                        Nombre Propietario</label>
                        <input 
                            id="nombrePropietario"
                            type="text" 
                            placeholder="Nombre del Propietario"
                            className="p-2 mt-2 mb-2 border-2 w-full placeholder-gray-500 rounded-md"
                            value={propietario}
                            onChange={(e)=> setPropietario(e.target.value)}
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="Email" className="block  text-gray-700 font-black  uppercase">
                        Email</label>
                        <input 
                            id="Email"
                            type="email" 
                            placeholder="Email"
                            className="p-2 mt-2 mb-2 border-2 w-full placeholder-gray-500 rounded-md"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                        />   
                    </div>    

                    <div className="mb-5">
                        <label htmlFor="Alta" className="block  text-gray-700 font-black  uppercase">
                        Alta</label>
                        <input 
                            id="Alta"
                            type="date"
                            className="p-2 mt-2 mb-2 border-2 w-full placeholder-gray-500 rounded-md"
                            value={fecha}
                            onChange={(e)=> setFecha(e.target.value)}
                        />   
                    </div> 

                    <div className="mb-5">
                        <label htmlFor="sintomas" className="block  text-gray-700 font-black  uppercase">
                        Sintomas</label>
                        <textarea
                            id="sintomas"
                            placeholder="Anotar los Sintomas"
                            className="p-2 mt-2 mb-2 border-2 w-full placeholder-gray-500 rounded-md"
                            value={sintomas}
                            onChange={(e)=> setSintomas(e.target.value)}
                        />   
                    </div>  
                    <input
                    type="submit"
                    className="bg-indigo-600 w-full  p-3 text-white  uppercase font-bold hover:bg-indigo-700
                    transition-all"
                    value={paciente.id ?  "Editar Paciente" : "Agregar Paciente"}
                    />
                </div>

                
            </form>
        </div>
    </>
  )
}

export default Formulario
