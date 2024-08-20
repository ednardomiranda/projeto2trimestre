const caixaPrincipal = document.querySelector(".caixa-princpal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas= document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const caixaResultado = document.querySelector(".caixa-resultado");

const perguntas = [
    {
        enunciado: "pergunta 1",
         alternativas:[
            "Alternativa 1",
            "Alterntiva 2"
         ]
    },
    {
        anunciado: "Pergunta 2",
        altenativa:[
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        anunciado: "Pergunta 3",
        altenativa:[
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        anunciado: "Pergunta 4",
        altenativa:[
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        anunciado: "Pergunta 5",
        altenativa:[
            "Alternstiva 1",
            "Alternativa 2"
        ]
    },
];

let atual = 0;
let perguntaAtual;

    function mostraPerguta9(){
        perguntaAtual = pergunta [atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
    }
    mostraPerguta9();