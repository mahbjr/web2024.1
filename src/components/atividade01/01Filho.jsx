
const Filho = ({altura, peso}) => {
    let imc = peso/(altura*altura) 
    
    function mensagens() {
        if (imc < 18) {return <h3>Abaixo do peso</h3>}
        else if (imc > 25) {return <h3>Acima do peso</h3>}
        else {return <h3>Peso ideal</h3>}    
    }

    return (
        <div>
            <h2>imc: {imc}</h2>
            {mensagens()}
        </div>
    )
}

export {Filho}