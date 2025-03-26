function getComputerChoice() {

    choices = Math.floor(Math.random() * 3)

    if (choices == 0) {
        alert("rock");
    } else if (choices == 1) {
        alert("paper");
    } else if (choices == 2) {
        alert ("scissors")
    }

return choices;

}

console.log(getComputerChoice());