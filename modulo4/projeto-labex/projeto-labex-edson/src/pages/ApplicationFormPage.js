import react from "react";
import { useNavigate } from "react-router-dom";
export default ()=>{
    const navigate=useNavigate()
    const goToBack=()=>{
        navigate(-1)
    }

    return(
        <>
        <h2> Inscreva-se para uma viagem</h2>
        <select placeholder="escolha uma viagem">
            <option> Marte</option>
        </select>
        <input />
        <input />
        <input />
        <input />
        <select placeholder="escolha país">
            <option> Brasil</option>
        </select>
        <button onClick={goToBack}> Voltar</button>
        <button> Enviar </button>
        </>
    )
}