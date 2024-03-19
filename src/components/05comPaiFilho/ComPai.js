import { ComFilho } from "./ComFilho"

const ComPai = () => {
    
    function receberMensagemDoFilho(mensagem) {
        alert("Mensagem do filho: " + mensagem)
    }
    
    return (
        <>
            <ComFilho mensagem="Oi filho" enviarMensagemPoPai={receberMensagemDoFilho}/>
        </>
    )
}

export { ComPai }