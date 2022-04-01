import react from "react";
import { useNavigate } from "react-router-dom";
export default ()=>{
    const navigate=useNavigate()
    const goToBack=()=>{
        navigate(-1)
    }

    return(
        <>
        <h2>Criar viagem</h2>
        <input placeholder="nome"/>
        <input placeholder="escolha planeta"/>
        <input placeholder="data"/>
        <input placeholder="descrição"/>
        <input placeholder="duração em dias"/>
        <button onClick={goToBack}> Voltar</button>
        <button> criar </button>
        </>
    )
}