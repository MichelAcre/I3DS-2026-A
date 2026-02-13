
import './App.css'
import Link from './components/Link/Link'
import Perfil from './components/Perfil/Perfil'
import Rodape from './components/Rodape/Rodape'
import SocialLink from './components/SocialLink/SocialLink'


function App() {

return (
    <div id="App">

    <Perfil fotoPerfil={"https://placehold.co/100"}>
      Gustavo Castello 
    </Perfil>


      <div className='switch'>
        botão switch
      </div>
      <ul>
        <Link url={""}>Inscreva-se</Link>
        <Link url={""}>Minha Playlist</Link>
        <Link url={""}>Me pague um café</Link>
        <Link url={""}>Conheça o curso DEV</Link>
      </ul>

        <SocialLink url={"https://github.com"} icon={"logo-github"}></SocialLink>
        <SocialLink url={"https://instagram.com"} icon={"logo-instagram"}></SocialLink>
        <SocialLink url={"https://discord.com"} icon={"logo-discord"}></SocialLink>
        <SocialLink url={"https://youtube.com"} icon={"logo-youtube"}></SocialLink>

        <Rodape>MichelAcre</Rodape>    
    </div>
  )
}

export default App
