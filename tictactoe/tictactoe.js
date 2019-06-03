// 1) Select the board
// 2) Add event listener
// 3) Click on square - fill it in
// 4) Alternate what to put
// 5) Make sure can't click on same square more than once
// 6) Check for winner
// 7) Check for draw

let boxes = document.querySelectorAll('.box')
let player = 'X'

// alternate players
function changePlayer() {
    if (player == 'X') {
        player = 'O'
    } else {
        player = 'X'
    }
}


boxes.forEach(function (box) {
    box.onclick = function (event) {
        if (event.target.innerHTML == '') {
            event.target.innerHTML = player
            if (checkWinner()) {
                setTimeout(function () {
                    alert('You Won!')
                }, 200)
            }
            else {
                if (checkDraw()) {
                    setTimeout(function () {
                        alert("DRAW")
                    }, 200)
                }
                changePlayer()
            }
        } else {
            alert('NOPE.')
        }
    }
})

// for winners
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function checkWinner() {
    let winner = false

    winningCombos.forEach(function (element) {

        if (boxes[element[0]].innerHTML == player && boxes[element[1]].innerHTML == player && boxes[element[2]].innerHTML == player) {
            winner = true
        }
    })
    return winner
}

// check draw
function checkDraw() {
    let draw = true
    boxes.forEach(function (box) {
        if (box.innerHTML == '') {
            draw = false
        }
    })
    return draw
}

// reset game
let button = document.getElementById('reset')

button.onclick = function resetBoard() {
    boxes.forEach(function (element) {
        element.innerHTML = ""
    })
}




// function checkWinner() {
//     let winner = false
//     winningCombos.forEach(function (combo, index) {
//         if (boxes[combo[0]].innerHTML && boxes[combo[0]].innerHTML === boxes[combo[1]].innerHTML && boxes[combo[0]].innerHTML === boxes[combo[2]].innerHTML) winner = boxes[combo[0]].innerHTML


//     })
//     return winner
// }




// board.onclick = function (event) {
//     event.target.innerHTML = player
//     changePlayer()
// }




