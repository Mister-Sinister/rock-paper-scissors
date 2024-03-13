
function getComputerChoice () {
    let options = ["rock", "paper", "scissors"];
    choice = Math.floor(Math.random() * options.length);
    return options[choice]
}