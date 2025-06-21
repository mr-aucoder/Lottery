const players = [];

document.addEventListener("DOMContentLoaded", () => {
    const numberButtons = document.querySelectorAll("#buttons button");

    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
            const nameInput = document.getElementById("display-el");
            const name = nameInput.value.trim();
            const number = button.textContent;

            if (!name) {
                alert("Please enter your name first.");
                return;
            }

            players.push([name, number]);
            button.disabled = true;
            button.classList.add("clicked"); 
        });
    });

    setupCheckboxListener();
});

// Handle checkbox toggle to show/hide ticket button
function setupCheckboxListener() {
    const checkbox = document.querySelector("input[type='checkbox']");
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            renderTicketButton();
        }
    });
}

// Create and display the "Get Ticket" button
function renderTicketButton() {
    const button = document.createElement("button");
    button.textContent = "Get Ticket";
    button.onclick = handleGetTicket;

    const ticketContainer = document.getElementById("ticket");
    ticketContainer.textContent = "";
    button.id = "get-ticket-button";
    ticketContainer.appendChild(button);
}

// Clear input field and show player list
function handleGetTicket() {
    document.getElementById("display-el").value = ""; // Clear name input
    renderPlayerList();
}

// Display the current list of players
function renderPlayerList() {
    const list = document.getElementById("player-list");
    list.textContent = "";

    for (let [name, number] of players) {
        const li = document.createElement("li");
        li.textContent = `${name}: ${number}`;
        list.appendChild(li);
    }
}

// Pick and display a random winner
function pickWinner(){
    if(players.length<5){
        alert("Please wait until at least 5 players have joined.");return;
    }

    const random=Math.floor(Math.random()*players.length);
    let [winnerName,winningNumber]=players[random];
    let winnerDisplay=document.querySelector('#seewinner');
    winnerDisplay.textContent = `🎉 Winner: ${winnerName} (Number: ${winningNumber}) 🎉`;
   }