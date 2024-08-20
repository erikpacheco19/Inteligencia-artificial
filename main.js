const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "os aparelhos auditivos sao fornecidos  gratuitamente pelo SUS"?
        alternativas: [
            {
                texto: "sim.",
                afirmacao: "<b>não</b> depende o nivel de surdez."
            },
            {
                texto: "existe modelo certo de aparelho para cada nivel de surdez?.",
                afirmacao: "para cada nivel de <b>surdez</b>, existem diferentes tipos de aparelho."
            }
        ]
    },
    {
        enunciado: "o que é Implante Coclear?",
        alternativas: [
            {
                texto: "implante realizado na coclea.",
                afirmacao: "popularmente conhecido como <b>ouvido</b> biônico."
            },
            {
                texto: "o implante estimula diretamente o nervo auditivo.",
                afirmacao: "os eletrodos colocados dentro da cóclea e o nervo <b>auditivo</b> leva esfes sinais para o cérebro."
            }
        ]
    },
    {
        enunciado: "Todos os surdos tem desejo de realizar o Implante Coclear?" 
                texto: "Nao.",
                afirmacao: "<b>surdos</b> implantados relatam que o implante causa dor de cabeça e desconforto."
            },
            {
                texto: "alguns surdos são contra o implante.",
                afirmacao: "<b>surdos</b>, que se aceitam como surdos ."
            }
        ]
    },
    {
        enunciado: "se aceitam como surdos e utilizam a LIBRAS",
        alternativas: [
            {
                texto: "como forma de comunicaçao.",
                afirmacao: "<b>Foco</b> é seu ponto forte, preferindo dominar suas ferramentas atuais."
            },
            {
                texto: "se identificam como surdos e aceitam .",
                afirmacao: "<b>tipos de identidade surda</b>."
            }
        ]
    },
    {
        enunciado: "Como você prefere trabalhar em um projeto?",
        alternativas: [
            {
                texto: "Prefiro trabalhar sozinho, tendo total controle sobre o projeto.",
                afirmacao: "<b>Independência</b> é uma preferência sua, gostando de ter controle total sobre seus projetos."
            },
            {
                texto: "Gosto de trabalhar em equipe, colaborando e compartilhando responsabilidades.",
                afirmacao: "<b>Trabalho em equipe</b> é algo que você valoriza, apreciando a colaboração e a partilha de responsabilidades."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.innerHTML = historiaFinal;
    caixaAlternativas.innerHTML = "";
}

mostraPergunta();
