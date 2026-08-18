let opcoes = ["pedra", "papel", "tesoura"];
let escolhaComputador = opcoes[Math.floor(Math.random() * 3)];
let escolhaJogador;

do {
    let entrada = prompt("Escolha pedra, papel ou tesoura:");
    escolhaJogador = entrada.toLowerCase().trim();

    if (escolhaJogador !== "pedra" && escolhaJogador !== "papel" && escolhaJogador !== "tesoura") {
        alert("Opção inválida! Digite pedra, papel ou tesoura.");
    }

} while (escolhaJogador !== "pedra" && escolhaJogador !== "papel" && escolhaJogador !== "tesoura");

let resultado;

if (escolhaJogador === escolhaComputador) {
    resultado = "Empate";
} else if (
    (escolhaJogador === "pedra" && escolhaComputador === "tesoura") ||
    (escolhaJogador === "papel" && escolhaComputador === "pedra") ||
    (escolhaJogador === "tesoura" && escolhaComputador === "papel")
) {
    resultado = "Você venceu";
} else {
    resultado = "Você perdeu";
}

alert("Você escolheu: " + escolhaJogador + "\nO computador escolheu: " + escolhaComputador + "\n" + resultado);