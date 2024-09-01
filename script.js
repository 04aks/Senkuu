let computer_choice = 0;
let computer_item;
let items = ["rock", "paper", "scissors"];

function getComputerChoice(){
    computer_choice = Math.floor(Math.random() * 3);

    switch(computer_choice){
        case 0: computer_item = items[computer_choice]; break;
        case 1: computer_item = items[computer_choice]; break;
        case 2: computer_item = items[computer_choice]; break;
    }

    document.getElementById("computer_info").innerHTML = "Computer has already chosen.";
    console.log(computer_item);
}

function getPlayerChoice(){
    document.getElementById("rock").addEventListener("click", function(){
        if(computer_item == "rock"){
            document.getElementById("result").innerHTML = "It's a tie. Computer chose "+ computer_item;
        }
        if(computer_item == "paper"){
            document.getElementById("result").innerHTML = "You Lose. Computer chose "+ computer_item;
        }
        if(computer_item == "scissors"){
            document.getElementById("result").innerHTML = "You Win. Computer chose "+ computer_item;
        }
        disableAllButtons();
    })

    document.getElementById("paper").addEventListener("click", function(){
        if(computer_item == "rock"){
            document.getElementById("result").innerHTML = "You Win. Computer chose "+ computer_item;
        }
        if(computer_item == "paper"){
            document.getElementById("result").innerHTML = "It's a tie. Computer chose "+ computer_item;
        }
        if(computer_item == "scissors"){
            document.getElementById("result").innerHTML = "You Lose. Computer chose "+ computer_item;
        }
        disableAllButtons();
    })

    document.getElementById("scissors").addEventListener("click", function(){
        if(computer_item == "rock"){
            document.getElementById("result").innerHTML = "You Win. Computer chose "+ computer_item;
        }
        if(computer_item == "paper"){
            document.getElementById("result").innerHTML = "You Lose. Computer chose "+ computer_item;
        }
        if(computer_item == "scissors"){
            document.getElementById("result").innerHTML = "It's a tie. Computer chose "+ computer_item;
        }
        disableAllButtons();
    })
    
}

function disableAllButtons(){
    let buttons = document.querySelectorAll("button");

    buttons.forEach(function(button){
        button.disabled = true;
    })
}


getComputerChoice();
getPlayerChoice();

