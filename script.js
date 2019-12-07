let XO = 0
function gamematrix(){
    const matrixTd = document.querySelectorAll('td')
    const matrix = []
    for (valor of matrixTd) {
        matrix.push(valor.innerText)
    }
    return matrix
}

function choice(n) {
    const area = document.querySelectorAll('td')

    if (XO%2 == 0) {
        area[n].textContent = 'X'
    } else {
        area[n].textContent = 'O'
    }
    XO++
    console.log(area[n].textContent) 
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
    DeuVelha()
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
    const p = document.createElement("P")
    const t = document.createTextNode(`O jogador ${x} ganhou`)
    const div = document.querySelectorAll('div')
    p.appendChild(t)
    div[1].appendChild(p)
    div[1].addEventListener("click", event =>{history.go(0)})
}

function player() {
    const whichP = document.querySelectorAll('div')
    if (XO%2 !== 0) {
        whichP[1].innerText = 'X'
    } else {
        whichP[1].innerText = 'O'
    }
}

function runnig() {
    player()
    winner()
}