import { useState } from 'react'
import ComponenteFilho from './ComponenteFilho'
import { NumeroContext } from './Context'

const ComponenteAvo = () => {
  const [numero] = useState(1)

  return (
    <NumeroContext.Provider value={{ numero }}>
      <div>
        <h2>Componente Avo</h2>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`} alt={`Pokemon ${numero}`} />
        <ComponenteFilho />
      </div>
    </NumeroContext.Provider>
  );
};

export default ComponenteAvo;