function createGame(player1, hour, player2) {
  return`
    <li>
      <!-- inglaterra --->
      <img
        src="./images/group-b/icon-${player1}.svg"
        alt="Bandeira da ${player1}"
      />
      <strong>${hour}</strong>
      <!-- irã --->
      <img 
      src="./images/group-b/icon-${player2}.svg" 
      alt="Bandeira do ${player2}" />
    </li>
  `
}

let animationDelay = 0;
function createCard(date, day, games) {
  animationDelay = animationDelay + 1
  return `
  <div class="card" style= "animation-delay: ${animationDelay}s;">
      <h2>${date} <span> ${day} </span></h2>
      <ul>
        ${games}
      </ul>

        
  </div>

  `
}

document.querySelector(".cards").innerHTML =
  createCard(
    "21/11",
    "segunda",
    createGame("ingla", "10:00", "ira") +
      createGame("senegal", "13:00", "holanda") +
      createGame("states", "16:00", "gales")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argen", "07:00", "arabia") +
      createGame("dinamarca", "10:00", "tunisia") +
      createGame("mexico", "13:00", "polonia") +
      createGame("franca", "16:00", "australia")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("marrocos", "07:00", "croacia") +
    createGame("alemanha", "10:00", "japao") +
    createGame("espanha", "13:00", "costa") +
    createGame("belgica", "16:00", "canada")
  ) 
    
