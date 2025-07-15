let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeScoreCount = 0
let guestScoreCount = 0

function homeAddOne(){
    console.log("home add one score")
    homeScoreCount += 1
    homeScore.textContent = homeScoreCount
}

function homeAddTwo(){
    console.log("home add two score")
    homeScoreCount += 2
    homeScore.textContent = homeScoreCount
}

function homeAddThree(){
    console.log("home add three score")
    homeScoreCount += 3
    homeScore.textContent = homeScoreCount
}

function guestAddOne(){
    console.log("guest add one score")
    guestScoreCount += 1
    guestScore.textContent = guestScoreCount
}

function guestAddTwo(){
    console.log("guest add two score")
    guestScoreCount += 2
    guestScore.textContent = guestScoreCount
}

function guestAddThree(){
    console.log("guest add three score")
    guestScoreCount += 3
    guestScore.textContent = guestScoreCount
}

function clearAllScore(){
    homeScoreCount = 0
    guestScoreCount = 0
    homeScore.textContent = homeScoreCount
    guestScore.textContent = guestScoreCount
}