// DATABASE
const emailDatabase = ["test1@gmail.com", "test2@gmail.com"];

let btnSend = document.getElementById ("getBtn");

let btnUndo = document.getElementById ("undoBtn");


// FUNZIONE ANNULLA BOTTONE HEADER
btnUndo.addEventListener("click", function ()  {

    location.reload ();

})

// FUNZIONE INVIO BOTTONE HEADER
btnSend.addEventListener("click", function ()  {

    // EMAIL
    let getEmail = document.getElementById ("emailInput");
    let email = getEmail.value;
    console.log(email);

    // DATABASE CHECK
    if (emailDatabase.includes(email)) {
        console.log("email corretta");

        // REMOVE HEADER
        let containerH = document.getElementById("hContainer");
        containerH.classList.add("null");

        // SHOW MAIN

        let containerM = document.getElementById("containerMain");
        containerM.classList.remove("null")

        // ALLERT
        alert("Email presente nel database");
    }
    else {
        console.log("email errata");
        alert("Email errata");
    }

})

// DICE ROLL BTN
let diceRoll = document.getElementById("mainRoll");

diceRoll.addEventListener("click", function(){

    // RANDOM NUMBERS
    let randomNumX = Math.floor(Math.random() * 6 + 1);
    console.log(randomNumX);

    let randomNumY = Math.floor(Math.random() * 6 + 1);
    console.log(randomNumY);

    // INSERT NUMBERS
    document.getElementById("result1").innerHTML = randomNumX
    document.getElementById("result2").innerHTML = randomNumY

    if (randomNumX > randomNumY) {
        console.log("player Win");

        document.getElementById("dice1").innerHTML = "WINNER!"
        document.getElementById("dice2").innerHTML = "LOOSER!"
        
    }
    else if (randomNumX < randomNumY) {
        console.log("PC Win")

        document.getElementById("dice2").innerHTML = "WINNER!"
        document.getElementById("dice1").innerHTML = "LOOSER!"

    }
    else {
        console.log("draw");

        document.getElementById("dice2").innerHTML = "DRAW!"
        document.getElementById("dice1").innerHTML = "DRAW!"

    }

    

});


