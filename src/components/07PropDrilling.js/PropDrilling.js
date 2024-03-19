
const CompA = () => {
    
    let funcaoDeC = null

    function receberRefDeC(ref) {
        funcaoDeC = ref
    }
    
    return (
        <div>
            <CompB/>
            <CompC enviarRefParaA={receberRefDeC}/>
        </div>
    )
}

const CompB = ({acaoEmD}) => {
    return (
        <div>
            <button
                onClick={() => alert}
            >
                disparar ação em D
            </button>
        </div>
    )
}

const CompC = ({enviarRefParaA}) => {
    
    let funcaoDeD = null

    function receberRefDeD(ref) {
        funcaoDeD = ref
        enviarRefParaA(funcaoDeD)
    }
    
    return (
        <div>
            <CompD enviarRefParaC={receberRefDeD}/>
        </div>
    )
}

const CompD = ({enviarRefParaC}) => {
    
    function acaoEmD() {
        alert("estou em D")
    }
    
    enviarRefParaC(acaoEmD)

    return (
        <div>
            
        </div>
    )
}

export {CompA, CompB, CompC, CompD}