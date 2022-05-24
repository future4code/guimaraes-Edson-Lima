import react from "react";
import { useNavigate } from "react-router-dom";
export default ()=>{
    const navigate=useNavigate()
    const goToHome=()=>{
        navigate(-1)
    }
    const goToAppForm=()=>{
        navigate('/appform')
    }
    return(
        <>
        <button onClick={goToHome}>Voltar</button>
        <button onClick={goToAppForm}>Inscrever-se</button>
        <h2>Lista de viagens</h2>
        </>
    )
}