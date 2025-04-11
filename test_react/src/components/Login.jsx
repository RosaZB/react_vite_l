import React, { useState } from "react";
import Imagen from '../assets/perfil_max.jpg'
import Imagenperfil from '../assets/perfil_img.jpg' 
import appFirebase from "../credenciales";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

const auth = getAuth(appFirebase)

 const Login = () =>{
    //variables
    const[registrando, setRegistrando]=useState(false)

    const functAutenticacion = async(e)  =>{
        e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;
        if(registrando){
            await createUserWithEmailAndPassword(auth, correo, contraseña)
        } else{
            await signInWithEmailAndPassword(auth, correo, contraseña)
        }

    }



     return (
        <div className="container">
            <div className="row">
                {/*   columna mas pequeña para el formulario */}
                <div className="col-md-4">
                    <div className="padre">
                        <div className="card card-body">
                            <img src={Imagenperfil} className="esttilo-profile"></img>
                            <form onSubmit={functAutenticacion}>
                                <input type="text" placeholder="Ingresar Email" className="cajatexto"id="email" ></input>
                                <input type="password" placeholder="Ingresar contraseña" className="cajatexto" id="password"></input>
                                <button className="btnform">{registrando ? "Registrate": "Inicia Sesion"}</button>
                            </form>
                            <h4>{registrando ? "si ya tienes cuenta": "No tienes cuenta"}<button onClick={()=>setRegistrando(!registrando)}>{registrando ? "Inicia Sesion": "Registrate"}</button></h4>

                        </div>

                    </div>

                </div>
                {/*   columa mas grande para el formulario */}
                <div className="col-md-8">
                <img src={Imagen} className="tamaño-imagen"/>
                </div>

            </div>


        </div>
     )
 }

 export default Login