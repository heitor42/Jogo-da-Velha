//var playerX = prompt("Player X:")
//var playerO = prompt("player O:")
function gamematrix(){
    let gamematrix = []
    for (l=0; l<=2; l++){
        let linha = []

        for (c=0; c<=2; c++){
            linha.push(document.getElementById(`${l}${c}`).value)
        }
        gamematrix[l] = linha
    }
    return gamematrix
}

function winner(){
    let matrix = gamematrix()

    //primeiro caso (linhas e colunas)
    for (l=0; l<3; l++){
        if (Boolean(matrix[l][l])){  
            if (matrix[l][0]==matrix[l][1] && matrix[l][1]==matrix[l][2]){
                return matrix[l][l]
            }
            if (matrix[0][l]==matrix[1][l] && matrix[0][l]==matrix[2][l]){
                return matrix[l][l]
            }
        }
    }

    //segundo caso (diagonais)
    if (Boolean(matrix[1][1])){
        switch (true) {
            case (matrix[1][1]==matrix[0][0] && matrix[1][1]==matrix[2][2]):
                return matrix[1][1]
                break;
            case (matrix[1][1]==matrix[2][0] && matrix[1][1]==matrix[0][2]):
                return matrix[1][1]
                break;
        }
    }
}

function testa(){
    console.log(gamematrix())
    console.log(winner())
}

