const ComFilho = ({mensagem, enviarMensagemPoPai}) => {
    return (
        <>
            <h2>Mensagem do pai: {mensagem}</h2>
            <button
                onClick={() => {enviarMensagemPoPai("Oi pai tudo bom?")}}
            >
                Enviar mensagem para o pai!
            </button>
        </>
    )
}

export { ComFilho }