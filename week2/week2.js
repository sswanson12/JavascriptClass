$("h1").on("click", greetUser);

function rollDie(){
    let die = Math.floor(Math.random() * 6) + 1;
    alert(`You rolled a ${die}`);
}

function drawCard(){
    let card = Math.floor(Math.random() * 52) + 1;
    alert(`You drew a ${card}`);
}

function greetUser(){
    document.write("My first script");
}