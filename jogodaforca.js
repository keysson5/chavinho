let bancoPalavras = [
    "javascript", "programacao", "computador", "desenvolvedor", "algoritmo",
    "variavel", "funcao", "objeto", "array", "navegador",
    "internet", "teclado", "software", "hardware", "codigo"
];

let palavraSecreta = bancoPalavras[Math.floor(Math.random() * bancoPalavras.length)];
let letrasPalavra = palavraSecreta.split("");
let letrasDescobertas = palavraSecreta.split("").map(() => "_");

let tentativas = 6;
let letrasChutadas = [];
let vitoria = false;

while (tentativas > 0) {

    let estadoAtual = letrasDescobertas.join(" ");

    let entrada = prompt(
        "Tentativas restantes: " + tentativas + "\n" +
        "Palavra: " + estadoAtual + "\n" +
        "Letras já chutadas: " + letrasChutadas.join(", ") + "\n" +
        "Digite uma letra:"
    );

    if (entrada === null) {
        break;
    }

    let letra = entrada.toLowerCase().trim();

    if (letra.length !== 1 || letra < "a" || letra > "z") {
        alert("Digite apenas uma letra válida!");
        continue;
    }

    if (letrasChutadas.includes(letra)) {
        alert("Você já chutou essa letra!");
        continue;
    }

    letrasChutadas.push(letra);

    if (letrasPalavra.includes(letra)) {
        for (let i = 0; i < letrasPalavra.length; i++) {
            if (letrasPalavra[i] === letra) {
                letrasDescobertas[i] = letra;
            }
        }
    } else {
        tentativas--;
    }

    if (!letrasDescobertas.includes("_")) {
        vitoria = true;
        break;
    }
}

if (vitoria) {
    alert("Parabéns! Você acertou a palavra: " + palavraSecreta.toUpperCase());
} else {
    alert("Você perdeu! A palavra secreta era: " + palavraSecreta.toUpperCase());
}