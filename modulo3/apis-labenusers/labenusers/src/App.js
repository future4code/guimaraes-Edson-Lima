import React from "react";
import InputUsuarios from "./components/InputUsuarios";
import ListaUsuarios from "./components/ListaUsuarios";

export default class App extends React.Component {
  state = {
    pagina: true,
  };

  modificaPagina = () => {
    this.setState({ pagina: !this.state.pagina });
  };

  render() {
    return (
      <div>
        <h4>Labenusers</h4>
        <button onClick={this.modificaPagina}>Lista Usuários</button>
        <InputUsuarios />

        <ListaUsuarios />
      </div>
    );
  }
}