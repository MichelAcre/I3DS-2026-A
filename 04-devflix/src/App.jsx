import "./App.css"
import logo from "./assets/devflix.png"
import lupa from "./assets/search.svg"
import Rodape from "./components/Rodape/Rodape"
const App = () => {
  return (
    <div id="App">
      <img src={logo} alt="Logotipo do serviço de streaming DEVFLIX em destaque, com letras vermelhas e fundo preto, representando uma plataforma de entretenimento e séries online." />

      <div className="search">
      <input 
      type="text"
      placeholder="Pesquise por filmes e séries..." 
      />
      <img src={lupa} alt="Botão de ação para pesquisa" />
      </div>

      <Rodape>Michel</Rodape>
    </div>
  )
}

export default App
