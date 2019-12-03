function gamematrix(){
    let gamematrix = []
    for (i=0; i<9; i++){
        gamematrix.push(document.getElementById(`${i}`).value)
    }
    return gamematrix
}

function winner(){
    let matrix = gamematrix()

    for (i=0; i<=6; i+=3){
        if (Boolean(matrix[i])){
            if (matrix[i] == matrix[i+1] && matrix[i] == matrix[i+2]){
                alerta(matrix[i])
            } 
        } 
    }

    for (i=0; i<=3; i++){
        if (Boolean(matrix[i])){
            if (matrix[i]==matrix[i+3] && matrix[i]==matrix[i+6]){
                alerta(matrix[i])
            }
        }
    }

    if (Boolean(matrix[4])){
        if (matrix[4]==matrix[0] && matrix[4]==matrix[8]){
            alerta(matrix[4])
        } else if (matrix[4]==matrix[2] && matrix[4]==matrix[6]){
            alerta(matrix[4])
        }
    }
}

function DeuVelha() {
    let matrix = gamematrix()
    let v = 0
    for (i in matrix){
        if (Boolean(matrix[i])){
            v++
        }
    }
    if (v==9){
        let p = document.createElement("P")
        let t = document.createTextNode("Deu velha")
        p.appendChild(t)
        document.getElementById("div2").appendChild(p)
        document.getElementById("div2").addEventListener("click", event =>{history.go(0)})
        
    }
}

function alerta(x) {
    let p = document.createElement("P")
    let t = document.createTextNode(`O jogador ${x} ganhou`)
    p.appendChild(t)
    document.getElementById("div2").appendChild(p)
    document.getElementById("div2").addEventListener("click", event =>{history.go(0)})
}

function runnig() {
    winner()
    DeuVelha()
}