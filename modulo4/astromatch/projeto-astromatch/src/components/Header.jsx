import React from "react";
import styled from 'styled-components'
import maches from '../img/maches.png'


const Container=styled.header`
padding: 10px;
text-align: center;
font-size: 30px;
margin-bottom: 20px;
border-bottom: 1px solid #d1c3c3;
height: 50px;
span{
    color: #3c0478;
    font-weight: bolder;
    position :relative;
    line-height: 50px;
    right: -35px;
      
}
img:hover{
    transform: scale(0.8);
}
img{
    float: right;
    height: 50px;
    cursor: pointer;
}
strong{
    color: #1eeb1c;
}
`
export default ()=>{
    return(
        <Container>
            <span><strong>Astro</strong>mach</span>
            <img src={maches} alt="Maches" />
        </Container>
    )
}