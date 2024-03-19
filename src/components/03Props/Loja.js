import Produto from "./Produto"

const Loja = () => {
    return (
        <div>
            <h1>Supermercado Quixadá</h1>
            <hr />
            <Produto nome="Pizza de calabresa" categoria="comida" preco={29.00}/>
            <hr />
            <Produto nome="Thinkpad X220" categoria="eletronico" preco={1000.00}/>
            <hr />
            <Produto nome="Macbook air M1" categoria="apple safada" preco={7000.00}/>
        </div>
    )
}

export default Loja