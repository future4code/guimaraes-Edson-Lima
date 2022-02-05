import React from "react";
import styled from "styled-components";
import CaixaDialogo from "./components/CaixaDialogo/CaixaDialogo";


const MainContainer = styled.div`


  border: 2px solid black;
  background-image: url('');
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component{

  render() {
    return (


      <MainContainer>
        <CaixaDialogo>
        </CaixaDialogo>
      </MainContainer>
    );

  }

}

export default App;