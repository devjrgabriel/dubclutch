// app.js

// Criando o componente Navbar
const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#home">Home</a>
      <a href="#services">Services</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </div>
  );
};

// Criando o componente principal App
const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <h1>Bem-vindo ao meu site</h1>
        <p>Este é um exemplo de uma navbar simples feita com React.</p>
      </div>
    </div>
  );
};

// Seleciona a div com id "root"
const rootElement = document.getElementById('root');

// Renderiza o componente App na div "root"
ReactDOM.render(<App />, rootElement);
