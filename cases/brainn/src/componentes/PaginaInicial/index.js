import React, {useState} from "react";
import './style.css';
import mega from '../PaginaInicial/img/logo-megasena24.png';

export default function PaginaInicial(){
    const [ numeroAleatorio, setNumeroAleatorio ] = useState();

  function gerarNumero() {
    const novoNumero = Math.floor(Math.random() * (100-1) + 1);
    setNumeroAleatorio(novoNumero);
    
  }

    return(
        <div className="conteudo-centralizado">
            <div className="conteudo">
            <img className="estilizar" src={mega} alt="BigCo Inc. logo"/>
            </div>
            <button  onClick={gerarNumero}>
                    Mega Sena
            </button>
            

            <div className="area-botao">
            <h1>{numeroAleatorio}</h1>
            </div>
                <label>
                    Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA!!
                </label>

                
            
        </div>
    );
}