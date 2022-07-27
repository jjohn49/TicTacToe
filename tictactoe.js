window.onload = function(){

    var buttons = []

    getAllButtonsByID(buttons)
}


function getAllButtonsByID(buttons){
    ['a','b','c'].forEach((letter)=>{
        [1,2,3].forEach((num)=>{
            buttons.push(addEventListenersToButtons(letter,num))
        })
    })
}

function addEventListenersToButtons(letter, num){
    let button = document.getElementById(letter+num)
    button.addEventListener("click", function event(){
        //console.log("button " + letter + num + " was clicked!")
        button.appendChild(document.createTextNode("X"))
        button.removeEventListener("click", event)
    })
}



