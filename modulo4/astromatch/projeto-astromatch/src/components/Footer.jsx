import React from "react";
import styled from 'styled-components'
import coracao from '../img/coracao.png'
import x from '../img/x.png'


const Container=styled.footer`
display: flex;
justify-content: space-around;
img{
    height: 50px;
}
`

export default ()=>{
    return(
        <Container>
            <img src={x}/>
            <img src={coracao}/>
       </Container>
    )
}