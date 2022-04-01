import react from "react";
import { useNavigate } from "react-router-dom";
export default ()=>{
    const navigate=useNavigate()
    const goToBack=()=>{
        navigate('/')
    }
    const goToAdmHome=()=>{
        navigate('/admhome')
    }
    return(
        <>
        <h2> Login</h2>
        <input  placeholder="Login"/>
        <input placeholder="senha"/>
        <button onClick={goToBack}> Voltar</button>
        <button onClick={goToAdmHome}> Entrar </button>
        </>
    )
}