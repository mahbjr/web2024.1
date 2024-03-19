const Produto = (Props) => {
    return (
        <div>
            <h3>Nome: {Props.nome}</h3>
            <h3>Categoria: {Props.categoria}</h3>
            <h3>Preço: R${Props.preco}</h3>
        </div>
    )
}

export default Produto