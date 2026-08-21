const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const statusMessage = document.getElementById("statusMessage");
const teamCard = document.getElementById("teamCard");

const teamLogo = document.getElementById("teamLogo");
const teamName = document.getElementById("teamName");
const teamCountry = document.getElementById("teamCountry");
const teamFounded = document.getElementById("teamFounded");
const teamStadium = document.getElementById("teamStadium");
const teamCapacity = document.getElementById("teamCapacity");
const teamCity = document.getElementById("teamCity");

const BASE_URL = "https://www.thesportsdb.com/api/v1/json/123/searchteams.php";

function showStatus(message) {
  statusMessage.textContent = message;
  statusMessage.classList.remove("hidden");
}

function hideStatus() {
  statusMessage.classList.add("hidden");
}

async function buscarTime() {
  const nomeTime = searchInput.value.trim();

  if (!nomeTime) {
    showStatus("Digite o nome de um time para buscar.");
    return;
  }

  teamCard.style.opacity = "0.5";
  showStatus("Buscando informações...");

  try {
    const response = await fetch(`${BASE_URL}?t=${encodeURIComponent(nomeTime)}`);

    if (!response.ok) {
      throw new Error("Erro na requisição à API.");
    }

    const data = await response.json();

    if (!data.teams || data.teams.length === 0) {
      showStatus("Nenhum time encontrado com esse nome.");
      teamCard.style.opacity = "1";
      return;
    }

    const time = data.teams[0];

    teamLogo.src = time.strTeamBadge || "";
    teamLogo.alt = `Escudo do ${time.strTeam}`;
    teamName.textContent = time.strTeam || "Nome indisponível";
    teamCountry.textContent = time.strCountry || "País indisponível";
    teamFounded.textContent = time.intFormedYear || "N/A";
    teamStadium.textContent = time.strStadium || "N/A";
    teamCapacity.textContent = time.intStadiumCapacity
      ? `${Number(time.intStadiumCapacity).toLocaleString("pt-BR")} espectadores`
      : "N/A";
    teamCity.textContent = time.strLocation || "N/A";

    hideStatus();
    teamCard.style.opacity = "1";
  } catch (error) {
    console.error(error);
    showStatus("Ocorreu um erro ao buscar o time. Tente novamente.");
    teamCard.style.opacity = "1";
  }
}

searchButton.addEventListener("click", buscarTime);

searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    buscarTime();
  }
});
