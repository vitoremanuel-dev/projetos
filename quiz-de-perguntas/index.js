const perguntas = [
    {
        questao: "Qual a linguagem de programação mais usada no mundo, segundo o Octovrese 2022 do Github?",
        resposta: [
            { texto: "Phyton", correta: false },
            { texto: "Java", correta: false },
            { texto: "Javascript", correta: true },
            { texto: "C#", correta: false }
        ]
    },
    {
        questao: "Em que ano surgiu o Javascript?",
        resposta: [
            { texto: "1996", correta: true },
            { texto: "2006", correta: false },
            { texto: "2016", correta: false },
            { texto: "1986", correta: false },
        ]
    },
    {
        questao: "Javascript é utilizado em:",
        resposta: [
            { texto: "Front-end", correta: false },
            { texto: "Back-end", correta: false },
            { texto: "Front-end e Back-end", correta: true },
            { texto: "Não é usado para programar", correta: false }
        ]
    },
    {
        questao: "O que significa HTML?",
        resposta: [
            { texto: "HyperText Market Language", correta: false },
            { texto: "HyperText Markup Language", correta: true },
            { texto: "HypedText Markup Language", correta: false },
            { texto: "HyperTexty Markup Language", correta: false },
        ]
    }
]

const elementoQuestao = document.getElementById("pergunta")
const botaoResposta = document.getElementById("botao-resposta")
const proximaPergunta = document.getElementById("proxima")

let questaoIndiceAtual = 0
let pontuacao = 0

function iniciarTeste() {
    questaoIndiceAtual = 0
    pontuacao = 0
    proximaPergunta.innerText = "Próximo"
    mostrarQuestao()
}

function mostrarQuestao() {
    resetar()
    let questaoAtual = perguntas[questaoIndiceAtual]
    let numeroQuestao = questaoIndiceAtual + 1
    elementoQuestao.innerText = numeroQuestao + ". " + questaoAtual.questao

    questaoAtual.resposta.forEach(resposta => {
        const botao = document.createElement("button")
        botao.innerText = resposta.texto
        botao.classList.add("botao")
        botaoResposta.appendChild(botao)
        if (resposta.correta) {
            botao.dataset.correta = resposta.correta
        }
        botao.addEventListener("click", selecionarResposta)
    })
}

function resetar() {
    proximaPergunta.style.display = "none"
    while (botaoResposta.firstChild) {
        botaoResposta.removeChild(botaoResposta.firstChild)
    }
}

function selecionarResposta(e) {
    const botaoSelecionado = e.target
    const estaCorreta = botaoSelecionado.dataset.correta === "true"
    if (estaCorreta) {
        botaoSelecionado.classList.add("correta")
        pontuacao++
    } else {
        botaoSelecionado.classList.add("errado")
    }
    Array.from(botaoResposta.children).forEach(botao => {
        if (botao.dataset.correta === "true") {
            botao.classList.add("correta")
        }
        botao.disabled = true
    })
    proximaPergunta.style.display = "block"
}

function mostrarPontuacao() {
    resetar()
    elementoQuestao.innerText = `Sua pontuação ${pontuacao} de ${perguntas.length}!`
    proximaPergunta.innerText = `Jogar novamente`
    proximaPergunta.style.display = "block"
}

function irProximoBotao() {
    questaoIndiceAtual++
    if(questaoIndiceAtual < perguntas.length) {
        mostrarQuestao()
    } else {
        mostrarPontuacao()
    }
}

proximaPergunta.addEventListener("click", () => {
    if (questaoIndiceAtual < perguntas.length) {
        irProximoBotao()
    } else {
        iniciarTeste()
    }
})
iniciarTeste()