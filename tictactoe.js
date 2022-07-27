window.onload = function(){

    var buttons = []

    var isplayer1 = true 

    var player1 = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ]

    var player2 = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ]
    getAllButtonsByID(buttons, isplayer1, player1, player2)

    var gameIsNotWon = true

    
}

function checkIfGameIsWon(player1, player2){

}

/* checkIfPlayerWon(player){
    player.forEach((row)=>{
        if(row.indexOf())
    })
} */


function getAllButtonsByID(buttons, isplayer1, player1, player2){
    [0,1,2].forEach((letter)=>{
        [0,1,2].forEach((num)=>{
            buttons.push(addEventListenersToButtons(isplayer1, player1, player2, letter,num))
        })
    })
}

function addEventListenersToButtons(isplayer1, player1, player2, letter, num){
    let button = document.getElementById(""+letter+num)
    button.addEventListener("click", function event(){
        console.log("button " + letter + num + " was clicked!")
        if(isplayer1){
            player1[letter][num] = 1
        }else{
            player2[letter][num] = 1
        }
        button.appendChild(document.createTextNode("X"))
        console.log("Player 1:" + player1)
        console.log("Player 2:" + player2)
        button.removeEventListener("click", event)
    })
}



