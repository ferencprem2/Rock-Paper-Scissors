var paper = document.getElementsByClassName("item")[0];
var scissors = document.getElementsByClassName("item")[1];
var rock = document.getElementsByClassName("item")[2];
let points = document.getElementById("score");


paper.addEventListener("click", () => {
    let userSelection = "paper";
    selectItem(userSelection)
})
scissors.addEventListener("click", () => {
    let userSelection = "scissors";
    selectItem(userSelection)
})
rock.addEventListener("click", () => {
    let userSelection = "rock";
    selectItem(userSelection)
})




const selectItem = (userSelect) => {
    let randomNumber = Math.floor( Math.random() * 3)
    let items = ["rock", "paper", "scissors"]
    let botSelection = items[randomNumber];
    console.log(botSelection)
    let counter = 0;
    switch(userSelect){
        case "paper": 
            switch(botSelection){
                case "paper":
                    alert("Draw")
                    break;
                case "rock":
                    counter = counter + 1;
                    points.innerText = counter;
                    alert("User wins")
                    break;
                case "scissors":
                    counter = counter - 1;
                    points.innerText = counter;
                    alert("Computer wins")
                    break;
                }
        break;
        case "rock":
            switch(botSelection){
                case "paper":
                    counter = -1
                    points.innerText = counter;
                    alert("Computer wins")
                    break;
                case "rock":
                    alert("Draw")
                    break;
                case "scissors":
                    counter = 1
                    points.innerText = counter;
                    alert("User wins")
                    break;
                }
        break;
        case "scissors": 
            switch(botSelection){
                case "paper":
                    counter = 1
                    points.innerText = counter;
                    alert("User wins")
                    break;
                case "rock":
                    counter = -1
                    points.innerText = counter;
                    alert("Computer wins")
                    break;
                case "scissors":
                    alert("Draw")
                    break;
                }
        break;
    }
}
