window.onload = function(){

    var buttons = []

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

    //acting as a bool 1 = true and 0 = false
    let isPlayer1 = [1]

    getAllButtonsByID(buttons, isPlayer1, player1, player2)

}

function checkIfPlayerWon(player){
    if (checkRow(player) || checkColumn(player) || checkDiagnols(player)){
        console.log("WONNNNNNNN")
        alert("Player has won the game")
    }
} 

function checkRow(player){
    for(let row = 0; row != player.length; row++){
        console.log(player[row])
        if(JSON.stringify(player[row])==JSON.stringify([1,1,1])){
            return true
        }
    }

    return false
}

function toggle(bool){
    if(bool[0]==1){
        bool[0]=0
    }else{
        bool[0]=1
    }
}

function checkColumn(player){
    for(let x = 0; x != player[0].length; x++){
        if(player[0][x]==1 && player[1][x]==1 && player[2][x]==1){
            return true
        }
    }

    return false
}

function checkDiagnols(player){
    if((player[0][0] == 1 && player[1][1] && player[2][2] == 1) || (player[0][2] == 1 && player[1][1] ==1 && player[2][0]==1)){
        return true
    }

    return false
}


function getAllButtonsByID(buttons, isPlayer1, player1, player2){
    [0,1,2].forEach((letter)=>{
        [0,1,2].forEach((num)=>{
            buttons.push(addEventListenersToButtons(isPlayer1,player1, player2, letter,num))
        })
    })
}

function addEventListenersToButtons(isPlayer1, player1, player2, letter, num){
    let button = document.getElementById(""+letter+num)
    button.addEventListener("click", function event(){
        console.log("button " + letter + num + " was clicked!")
        if(isPlayer1[0] == 1){
            player1[letter][num] = 1
            button.appendChild(document.createTextNode("X"))
            button.style.backgroundColor = '#ff0000'
            checkIfPlayerWon(player1)
        }else{
            player2[letter][num] = 1
            button.appendChild(document.createTextNode("O"))
            button.style.backgroundColor = '#0000FF'
            checkIfPlayerWon(player2)
        }
        toggle(isPlayer1)
        console.log(player1)
        console.log(player2)
        
        button.removeEventListener("click", event)
    })
}



