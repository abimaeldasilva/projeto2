const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova realidade, o seu dever é ajudar o meio ambiente",
        alternativas: [
            {
                texto: "Sim, vou ajudar a cuidar da minha cidade!",
                afirmacao: "Vou fazer o meu melhor para que aonde eu moro não tenha poluição"
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Preciso melhorar meu habitos para ajuar o meio ambieente"
            }
        ]
    },
    {
        enunciado: "Você vê vários papeis no chão do parque da sua cidade o que você faz para contribuir com o meio ambiente da sua cidade",
        alternativas: [
            {
                texto: "Eu vou e junto todo o papel e lixo que está no chão e jogo no lixo.",
                afirmacao: "Isso é a coisa certa a se fazer"
            },
            {
                texto: "Eu vou e deixo lá mesmo não junto as coisas dos outros.",
                afirmacao: "Sentiu mais felicidade em ajudar"
            }
        ]
    },
    {
        enunciado: "Após eu cozinhar sobrou várias cascas de frutas e alimentos o que você faz?",
        alternativas: [
            {
                texto: "Eu junto tudo em um pote e jogo como esterco na minha horta",
                afirmacao: "Vou fazer a coisa certa"
            },
            {
                texto: "Me preocupo em qual vai ser a melhor opção",
                afirmacao: "Mesmo se não tiver horta posso pedir para meu vizinho jogar no dele."
            }
        ]
    },
    {
        enunciado: "Quais são as melhores dicas para combater da dengue?",
        alternativas: [
            {
                texto: "colocar areia nos potes e vasos.",
                afirmacao: "Notei que colocando areia nos potes e vasos diminuo a contaminação da dengue."
            },
            {
                texto: "Coloco tela nas janelas para o mosquito não entrar.",
                afirmacao: "A tela nas janelas vai me proteger!"
            }
        ]
    },
    {
        enunciado: "Quando encontro metais, papel, plastico o que faço? ",
        alternativas: [
            {
                texto: "Organizo todos os materiais num lugar só.",
                afirmacao: "Assim não preciso me preoupar e perder tempo em qual lixo jogar."
            },
            {
                texto: "Reorganizo e separo todos em lixos diferentes como o papel no lixo somente para papel.",
                afirmacao: "Ressciclo todos os materias no seu devido lugar "

            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em um futuro próximo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
