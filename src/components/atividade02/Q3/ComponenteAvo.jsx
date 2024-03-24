import { useState } from 'react'
import ComponenteFilho from './ComponenteFilho'
import { ContadorContext } from './Context'

const ComponenteAvo = () => {
  const [contador, setContador] = useState(1)

  const incrementarContador = () => {
    setContador(contador => contador + 1);
  };

  return (
    <ContadorContext.Provider value={{ contador, incrementarContador }}>
      <div>
        <h2>Componente Avo</h2>
        <button onClick={incrementarContador}>Incrementar Contador</button>
        <br/>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${contador}.png`} alt={`Pokemon ${contador}`} />
        <ComponenteFilho />
      </div>
    </ContadorContext.Provider>
  );
};

export default ComponenteAvo;