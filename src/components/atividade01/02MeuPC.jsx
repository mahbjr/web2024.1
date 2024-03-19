
const PlacaMae = ({ nome, preco }) => {
  return (
    <div>
      <h3>Placa Mãe</h3>
      <p>Nome: {nome}</p>
      <p>Preço: R$ {preco}</p>
    </div>
  );
};

const Memoria = ({ nome, preco }) => {
  return (
    <div>
      <h3>Memória</h3>
      <p>Nome: {nome}</p>
      <p>Preço: R$ {preco}</p>
    </div>
  );
};

const PlacaDeVideo = ({ nome, preco }) => {
  return (
    <div>
      <h3>Placa de Vídeo</h3>
      <p>Nome: {nome}</p>
      <p>Preço: R$ {preco}</p>
    </div>
  );
};

const MeuPC = () => {
  return (
    <div>
      <h2>Meu Computador</h2>
      <PlacaMae nome="Placa Mãe Gigabyte" preco={500} />
      <Memoria nome="Memória Corsair 8GB" preco={300} />
      <PlacaDeVideo nome="Placa de Vídeo Nvidia GeForce GTX 1660" preco={1200} />
    </div>
  );
};

export { MeuPC };
