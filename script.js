//var player1 = prompt("Player 1:")
//var player2 = prompt("player 2:")
var body = document.getElementById("gamebody")
console.log(body)
console.log('game work')

function diegame(){
    let diegame = []
    for (l=0; l<=2; l++){
        let linha = []
        for (c=0; c<=2; c++){
            linha.push(document.getElementById(`${l}${c}`).value)
        }
        diegame[l] = linha
    }
    return diegame
}
function testa(){
    console.log(diegame())
}