import { useState } from 'react'

// importacion de los modulos de firebase
import appFirebase from '../src/credenciales'
// estado de logeado en el registro
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const auth= getAuth(appFirebase)

// importar los componentes
import Login from '../src/components/Login'
import Home from '../src/components/Home'

import './App.css'

function App() {
   const [usuario, setUsuario]= useState(null)

   onAuthStateChanged(auth, (usuarioFirebase)=>{
    if(usuarioFirebase){
      setUsuario(usuarioFirebase)
    }else{
      setUsuario(null)
    }

   })


  return (
    //renderizacion
    <div>
      {usuario ? <Home correoUsuario= {usuario.email}/> : <Login/>}
    </div>
  )
}

export default App
