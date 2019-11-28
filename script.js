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
                alert(`O jogador com ${matrix[i]} ganhou.`)
                window.location.reload()
            } 
        } 
    }

    for (i=0; i<=3; i++){
        if (Boolean(matrix[i])){
            if (matrix[i]==matrix[i+3] && matrix[i]==matrix[i+6]){
                alert(`O jogador com ${matrix[i]} ganhou.`)
                window.location.reload()
            }
        }
    }

    if (Boolean(matrix[4])){
        if (matrix[4]==matrix[0] && matrix[4]==matrix[8]){
            alert(`O jogador com ${matrix[4]} ganhou.`)
            window.location.reload()
        } else if (matrix[4]==matrix[2] && matrix[4]==matrix[6]){
            alert(`O jogador com ${matrix[4]} ganhou.`)
            window.location.reload()
        }
    }
}

function DeuVelha() {
    let matrix = gamematrix()
    matrix.sort()
    if (matrix[0] == matrix[1] == Boolean(matrix[2])){
        alert("Deu Velha")
        window.location.reload()
    }
}

function runnig() {
    winner()
    DeuVelha()
}