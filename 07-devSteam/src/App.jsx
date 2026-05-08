import "./App.css";
import Header from "./components/Header/Header";
import GameCard from "./components/GameCard/GameCard";
import CardSecundario from "./components/CardSecundario/CardSecundario"

const App = () => {
  return (
    <>
      <Header />
      <div className="App">
        <div>
          <h2 className="TextDesconto">PROMOÇÕES</h2>
          <div className="Cards">
            <GameCard />
            <GameCard />
            <GameCard />
          </div>
        </div>

        <div>
          <h2 style={{ marginTop: "108px"}}>
            OUTROS JOGOS
          </h2>
          <div className="Secondary">
        <CardSecundario />
        <CardSecundario />
        <CardSecundario />
        <CardSecundario />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
