import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import gemma from '../img/gemma-arterton.jpg'


const Container=styled.div`

display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
margin: 20px 0;
img{
    width: 400px;
    height: 400px;
    margin: 20px 0px;
    
}
`

export default (props)=>{


    return(
        <Container>
        <img src={props.usuario.photo}/>
<h2>{`${props.usuario.name} , ${props.usuario.age}`}</h2>
    <p>{props.usuario.bio}</p>
   </Container>
    )
}
