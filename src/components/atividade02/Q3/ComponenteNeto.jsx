import { useContext } from 'react'
import { ContadorContext } from './Context'

const ComponenteNeto = () => {
  const { contador } = useContext(ContadorContext)

  return (
    <div>
      <h2>Componente Neto</h2>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${contador + 2}.png`} alt={`Pokemon ${contador + 2}`} />
    </div>
  );
};

export default ComponenteNeto;
