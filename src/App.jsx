import {useState,useEffect} from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  //Hook Para pasar informacion atraves de Props
  const [pacientes,setPacientes]= useState([]) 
  //Hook para el boton de paciente
  const [paciente,setPaciente]=useState({})
  //useEffect   que solo se ejecucta una vez para comprobar si hay algo guardado en lOCAL STORAGE
  //se sabe quesolo se ejecuta una vez por que la dependencia es ([])
  useEffect(()=>{
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    obtenerLS();
  },[])
  //UseEffect para guardar en localStorage
  useEffect(()=>{
      localStorage.setItem('pacientes',JSON.stringify(pacientes))  
  },[pacientes])
  //Funcion para eliminar paciente
  const eliminarPaciente=((id)=>{
    //Para eliminar algun resgisro que se tenga iteramos
    const pacientesActualizado= pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizado)
  })
  return (
    <div className="container mx-auto mt-3">{/*Fragment*/}
      <Header
      />
      <div className="mt-12 md:flex">
      <Formulario
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
      />
      <ListadoPacientes
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
      />
      </div>
    </div>
  )
}

export default App
