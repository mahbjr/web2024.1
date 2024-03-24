import { useContext } from 'react'
import ComponenteNeto from './ComponenteNeto'
import { ContadorContext } from './Context'

const ComponenteFilho = () => {
  const { contador } = useContext(ContadorContext)

  return (
    <div>
      <h2>Componente Filho</h2>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${contador + 1}.png`} alt={`Pokemon ${contador + 1}`} />
      <ComponenteNeto />
    </div>
  );
};

export default ComponenteFilho;
