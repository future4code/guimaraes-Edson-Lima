import React from "react";
import styled from "styled-components";
import CaixaDialogo from "./components/CaixaDialogo/CaixaDialogo";


const MainContainer = styled.div`


  border: 2px solid black;
  background-image: url('https://i.pinimg.com/236x/32/22/a6/3222a61a86211c5013eb51aafa55ac84--wallpapper-iphone-wallpaper.jpg');
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