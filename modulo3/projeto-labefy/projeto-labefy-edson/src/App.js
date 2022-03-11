import React from 'react'
import './App.css'
import gunsrools from "./img/gunsrools.png";
import logocaveira from "./img/logo-caveira.png";
import musicascurtidas from "./img/musicas_curtidas.png";
import rocky from "./img/rocky.png";
import top50 from "./img/top50.png";
import top50global from "./img/top50global.png";
import CriarPlayList from './components/CriarPlayList'

export default function App(){






   return(
    <>
         <div className='sidebar'>
           
         <div className="sidebar-wraper">

<div className="sidebar__logo">
  <img src={logocaveira} alt="" />
</div>

<div className="sidebar__menu">
  <i className="fas fa-home"></i> 
  <i className="fas fa-search"></i>
  <i className="fas fa-database"></i>
</div>

<div className="sidebar__menu">
  <p className="sidebar__menu__title">Playlists</p>

  <div className="sidebar__menu__item">
    <div className="sidebar__menu__item__componente">
      <span>+</span>
    </div>
    <span>Criar Playlist</span>
  </div>

  <div className="sidebar__menu__item">
    <img src={musicascurtidas} alt="" />
    <span>Músicas Curtidas</span>
  </div>
</div>

<div className="sidebar__playlists">
  
</div>

<div className="sidebar__playlists">
  
</div>

<div className="sidebar__playlists">
  
</div>

</div>
           
</div>


         <div className='main'>
         <div className="main-wraper">

<div className="main__row">
  <div className="main__row__title"><h2>Paradas</h2></div>

  <div className="main__col">
    <img src={top50} alt="" />
    <h3>As 50 mais tocadas</h3>
    <p>Aqui vai a descrição da minha música...</p>
  </div>

  <div className="main__col">
    <img src={top50global} alt="" />
    <h3>As 50 mais tocadas</h3>
    <p>Aqui vai a descrição da minha música...</p>
  </div>

  <div className="main__col">
    <img src={top50} alt="" />
    <h3>As 50 mais tocadas</h3>
    <p>Aqui vai a descrição da minha música...</p>
  </div>

  <div className="main__col">
    <img src={top50} alt="" />
    <h3>As 50 mais tocadas</h3>
    <p>Aqui vai a descrição da minha música...</p>
  </div>

  <div className="main__col">
    <img src={top50} alt="" />
    <h3>As 50 mais tocadas</h3>
    <p>Aqui vai a descrição da minha música...</p>
  </div>

  <div className="main__col">
    <img src={top50} alt="" />
    <h3>As 50 mais tocadas</h3>
    <p>Aqui vai a descrição da minha música...</p>
  </div>

  <div className="main__col">
    <img src={top50} alt="" />
    <h3>As 50 mais tocadas</h3>
    <p>Aqui vai a descrição da minha música...</p>
  </div>

  <div className="main__col">
    <img src={top50} alt="" />
    <h3>As 50 mais tocadas</h3>
    <p>Aqui vai a descrição da minha música...</p>
  </div>



</div>

<div className="main__row">
  <div className="main__row__title"><h2>Minhas músicas</h2></div>

  <div className="main__col" data-image="img/gunsrools.png" data-artist="Guns N Roses" data-song="Sweet Child Of Mine" data-file="assets/music.mp3" >
    <img src={gunsrools} alt="" />
    <h3>Guns N Roses</h3>
    <p>Sweet Child Of Mine</p>
  </div>

  <div className="main__col" data-image="img/rocky.png" data-artist="Rocky Balboa" data-song="Gona Fly" data-file="assets/music.mp3">
    <img src={rocky} alt="" />
    <h3>Rocky Balboa</h3>
    <p>Aqui vai a descrição da minha música...</p>
  </div>

</div>

</div>

           
</div>




        <div className='player'>
        <div className="player__artist">

</div>
<div className="player__control">
  <div className="player__control__buttons">
    <i className="fas fa-backward"></i>
    <i className="far fa-pause-circle"></i>
    <i className="far fa-play-circle"></i>
    <i className="fas fa-forward"></i>
  </div>

  <div className="player__control__progress">
    <div className="player__control__progress_2"></div>
  </div>

</div>
          
</div>

  <div><CriarPlayList/></div>
    
    </>
   )
}


