import { useState } from "react";
import "./App.css";
import Link from "./components/Link/Link";
import Perfil from "./components/Perfil/Perfil";
import Rodape from "./components/Rodape/Rodape";
import SocialLink from "./components/SocialLink/SocialLink";
import Switch from "./components/Switch/Switch";

function App() {
  const[isLight,setIsLight] = useState(true)

  const troca = () => {
    setIsLight(!isLight)
  }

  return (
    <div id="App" className={isLight ? "light" : ""}>
      <Perfil fotoPerfil={"https://placehold.co/100"}>Gustavo Castello</Perfil>

      <Switch troca={troca} isLight={isLight} /> 
      <div id="Link">
        <ul>
          <Link url={""}>Inscreva-se</Link>
          <Link url={""}>Minha Playlist</Link>
          <Link url={""}>Me pague um café</Link>
          <Link url={""}>Conheça o curso DEV</Link>
        </ul>
      </div>

      <div id="SocialLinks">
        <SocialLink
          url={"htdtps://github.com"}
          icon={"logo-github"}
        ></SocialLink>
        <SocialLink
          url={"https://instagram.com"}
          icon={"logo-instagram"}
        ></SocialLink>
        <SocialLink
          url={"https://discord.com"}
          icon={"logo-discord"}
        ></SocialLink>
        <SocialLink
          url={"https://youtube.com"}
          icon={"logo-youtube"}
        ></SocialLink>
      </div>
      <Rodape>MichelAcre</Rodape>
    </div>
  );
}

export default App;
