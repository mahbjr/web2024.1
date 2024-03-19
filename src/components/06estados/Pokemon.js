import { useState } from "react"

const Pokemon = () => {
    
    let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const [contador, setContador] = useState(1)

    const incrementar = () => {
        setContador(contador => contador + 1)
    }
    const decrementar = () => {
        if(contador - 1 <= 0) return
        setContador(contador => contador - 1)
    }
    
    return(
        <div>
            <h2>ID: {contador}</h2>
            <img
                src = {url+contador+".png"}
                alt = "Pokemon"
                width = {200}
            />
            <br/>
            <button
                onClick={() => incrementar()}
            >
                incrementar
            </button>
            <br/>
            <button
                onClick={() => decrementar()}
            >
                decrementar
            </button>
        </div>
    )
}

export default Pokemon