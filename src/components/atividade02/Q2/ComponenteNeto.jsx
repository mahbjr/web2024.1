import { useContext } from 'react'
import { NumeroContext } from './Context'

const ComponenteNeto = () => {
  const { numero } = useContext(NumeroContext)

  return (
    <div>
      <h2>Componente Neto</h2>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero + 2}.png`} alt={`Pokemon ${numero + 2}`} />
    </div>
  );
};

export default ComponenteNeto;
