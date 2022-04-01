import react from "react";
import { useNavigate } from "react-router-dom";



export default ()=>{
const navigate=useNavigate()
const goToListTrips=()=>{
    navigate('/ListTrips')
}
const goToLogin=()=>{
    navigate('/login')
}
    return(
        <>
        <h1>Labex</h1>
        <button onClick={goToListTrips}> Ver viagens</button>
        <button onClick={goToLogin}>Área de Admin</button>
        </>
    )
}