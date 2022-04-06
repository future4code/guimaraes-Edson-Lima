import axios from "axios";
import react, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default ()=>{
    const [email,setEmail]=useState('')
    const [senha,setSenha]=useState('')
    const navigate=useNavigate()
    const goToBack=()=>{
        navigate('/')
    }
    const goToAdmHome=()=>{
        navigate('/admhome')
    }
    const handleEmail=(event)=>{
        setEmail(event.target.value)

    }
    const handleSenha=(event)=>{
        setSenha(event.target.value)

    }
    const login=()=>{
        console.log(email,senha)
        const body={
            "email": email,
            "password": senha
        }
        const url="https://us-central1-labenu-apis.cloudfunctions.net/labeX/Leonardo-Santos-guimaraes/login"
        axios.post(url,body).then((response)=>{

            localStorage.setItem("token",response.data.token)
            goToAdmHome()
        }).catch((error)=>{
            alert(error.response.data.message)
        })
    }
    return(
        <>
        <h2> Login</h2>
        <input  placeholder="E-mail" value={email} onChange={handleEmail}/>
        <input placeholder="senha" type="password" value={senha} onChange={handleSenha}/>
        <button onClick={goToBack}> Voltar</button>
        <button onClick={login}> Entrar </button>
        </>
    )
}