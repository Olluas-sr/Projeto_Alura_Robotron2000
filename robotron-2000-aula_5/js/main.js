const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")
const tabela__cor = document.querySelector("#tabela__cor")
const caixa__cor = document.querySelectorAll(".caixa__cor")
const robotron = document.querySelector(".robo")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
        atualizaEstatistica(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-") {
        peca.value = parseInd(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatistica(peca) {
    estatistica.forEach( (elemento ) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

document.querySelector("#btn").addEventListener("click", ()=> {
    tabela__cor.style.visibility = "visible"
})

caixa__cor[0].addEventListener("click", () => {
robotron.setAttribute("src", "img/Robotron 2000 - Vermelho.png")
tabela__cor.style.visibility = "hidden"
})

caixa__cor[1].addEventListener("click", () => {
    robotron.setAttribute("src", "img/Robotron 2000 - Amarelo.png")
    tabela__cor.style.visibility = "hidden"
    })

caixa__cor[2].addEventListener("click", () => {
robotron.setAttribute("src", "img/Robotron 2000 - Branco.png")
tabela__cor.style.visibility = "hidden"
    })

caixa__cor[3].addEventListener("click", () => {
robotron.setAttribute("src", "img/Robotron 2000 - Preto.png")
tabela__cor.style.visibility = "hidden"
    })
    
caixa__cor[4].addEventListener("click", () => {
robotron.setAttribute("src", "img/Robotron 2000 - Rosa.png")
tabela__cor.style.visibility = "hidden"
     })

caixa__cor[5].addEventListener("click", () => {
robotron.setAttribute("src", "img/robotron.png")
tabela__cor.style.visibility = "hidden"
    })