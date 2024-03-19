import { useState } from "react"

const Estado = () => {

    let [contador, setContador] = useState(0)

    const incrementar = () => {
        setContador(contador => contador + 1)
    }
    const decrementar = () => {
        setContador(contador => contador - 1)
    }

    return (
        <div>
            <h2>Contador: {contador}</h2>
            <button
            onClick={() => incrementar()}
            >
                incrementar contador :P
            </button>
            <hr/>
            <button
            onClick={() => decrementar()}
            >
                decrementar contador :P
            </button>
        </div>
    )
}

export {Estado}