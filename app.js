const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score =  document.querySelector('#score')



let result = 0
let hitPosition
let currentTime = 20

function randomSquare(){ //to place mole in random square
    squares.forEach(square => {
        square.classList.remove('mole') //remove mole if it exists on square
    })


    let randomSquare = squares[Math.floor(Math.random() * 9)] //get random number/square for mole to go to
    randomSquare.classList.add('mole') //add mole to random square

    hitPosition = randomSquare.id //get square positiong of randomSquare that mole is in
}


squares.forEach(square => {
    square.addEventListener('mousedown', () => { //Every time you click on mole square, you get a point!
        if (square.id == hitPosition){
            result++
            score.textContent = result
            hitPosition = null
        }
    })

})


function moveMole(){
    let timerId = null
    timerId = setInterval(randomSquare, 500) //call randomSquare function every 500ms to move mole
}




moveMole()

function countDown(){
    currentTime--
    timeLeft.textContent =currentTime

    if(currentTime == 0){
        clearInterval(countDownTimerId) //clear time once times up
        alert('Game Over, your final score is '+ result)
    }

}

let countDownTimerId = setInterval(countDown, 500)















