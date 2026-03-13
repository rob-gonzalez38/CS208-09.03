//Replaces starter script.js with the myLineUp function as per guidelines
function myLineUp(event) {
    event.preventDefault();

    const status = document.querySelector('input[name="status"]:checked').value;
    const gameDate = document.querySelector('select[name="gameDate"]').value;
    const checkedPlayers = document.querySelectorAll('input[name="players"]:checked');

    let players = [];
    checkedPlayers.forEach(function (player) {
        players.push(player.value);
    });

    console.log("Status:", status);
    console.log("Date:", gameDate);
    console.log("Players:", players);

    let outputText = "Status: " + status + ", Date: " + gameDate + ", Players: ";

    if (players.length > 0) {
        outputText += players.join(", ");
    } else {
        outputText += "None";
    }

    document.getElementById("output").textContent = outputText;
}

//Submit button
document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submitBtn");

    if (submitButton) {
        submitButton.addEventListener("click", myLineUp);
    }
});