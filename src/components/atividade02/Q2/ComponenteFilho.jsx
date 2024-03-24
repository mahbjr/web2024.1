import { useContext } from 'react'
import ComponenteNeto from './ComponenteNeto'
import { NumeroContext } from './Context'

const ComponenteFilho = () => {
  const { numero } = useContext(NumeroContext)

  return (
    <div>
      <h2>Componente Filho</h2>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero + 1}.png`} alt={`Pokemon ${numero + 1}`} />
      <ComponenteNeto />
    </div>
  );
};

export default ComponenteFilho;
