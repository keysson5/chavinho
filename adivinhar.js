let numeroSecreto = Math.floor(Math.random() * 50) + 1;
let palpite;
let tentativas = 0;

do {
    let entrada = prompt("Adivinhe o número secreto (entre 1 e 50):");
    palpite = parseInt(entrada);

    if (isNaN(palpite)) {
        alert("Por favor, digite um número válido");
        continue;
    }

    tentativas++;

    if (palpite > numeroSecreto) {
        alert("O número secreto é MENOR que " + palpite);
    } else if (palpite < numeroSecreto) {
        alert("O número secreto é MAIOR que " + palpite);
    }

} while (palpite !== numeroSecreto);

alert("Parabéns Você acertou o número " + numeroSecreto + " em " + tentativas + " tentativa(s)");