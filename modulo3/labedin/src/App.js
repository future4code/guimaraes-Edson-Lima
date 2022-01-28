import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import edson from './images/edson.jpg';
import linkedin from './images/IN.png';
import CardPequeno from './components/CardPequeno/CardPequeno'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={edson} 
          nome="Edson Céa de Lima" 
          descricao="Oi, eu sou o Edson. Sou estudante da Labenu! Trabalho com e-commerce a mais de 3 anos e agora estou aprendendo programar javascript com react!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      
      <div className="page-section-container">

      <CardPequeno 
          imagem="https://png.pngtree.com/png-vector/20201109/ourmid/pngtree-email-icon-design-png-image_2413695.jpg" 
          nome="Email: ledzaran3@gmail.com"  
        />

        <CardPequeno 
          imagem="https://cdn.icon-icons.com/icons2/1258/PNG/512/1495574609-map-location-solid-style-23_84564.png" 
          nome="Endereço: Rua Baronesa"  
        />
        </div>
      

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://img2.gratispng.com/20180612/qwk/kisspng-ames-research-center-international-space-station-n-nasa-5b206d13426755.813386501528851731272.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />

        <ImagemButton 
          imagem={linkedin}
          texto="Linkedin" 
        />         
      </div>
    </div>
  );
}

export default App;
