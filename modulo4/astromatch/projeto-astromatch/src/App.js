import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import './App.css';
import CardPerfil from './components/CardPerfil';
import Footer from './components/Footer';
import Header from './components/Header';

const Container=styled.div`
width: 400px;
height: 90vh;
border: 1px solid black;
`


function App(props) {
  const [usuario,setUsuario]=useState({})

  useEffect(()=>{
    getProfileToChoose()
  },[])
 const getProfileToChoose=()=>{
   axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Edson-Lima/person"
   ).then((response)=>{
      setUsuario(response.data.profile)

   }).catch((error)=>{
     alert(error.response)

   })

 }
  return (
    <Container >
      <Header/>
        <CardPerfil usuario={usuario}/>

      <Footer/>
    </Container>
  );
}

export default App;