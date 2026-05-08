const Rodape = () => {
  return (
    <>
      <footer className="bg-dark py-3">
        <div className="container d-flex justify-content-between">
    <div>
          <h1>DevSteam</h1>
          <h5>O melhor site de venda de jogos.</h5>
          <p>Links:</p>
          <ul className="list-unstyled">
            <li>
              <a href="#" className="text-decoration-none text-light">
                Jogos
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-light">
                Categorias
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-light">
                Perfil
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-light">
                Início
              </a>
            </li>
          </ul>
    </div>

    <div className="justify-content-center">
          <h2 className="text-center">Contato</h2>
          <p>DevSteam@gmail.com</p>
    </div>

        </div>
      </footer>
    </>
  );
};

export default Rodape;
