var startEl = document.getElementById("Start");
var comEl = document.getElementById("com");

var items = ["가위", "바위", "보"];
var currentIndex = 0;
var timerId;



startEl.onclick = function(){
    //
    timerId = setInterval(function() {
        currentIndex = ++currentIndex % 3;
        comEl.textContent = items[currentIndex];
    }, 100);
};

var scissorsEl = document.getElementById("sissor");
scissorsEl.onclick = function(){
    //
    var com = items[currentIndex];
    if(com == "가위"){
        alert("비겼습니다");
    } else if (com == "바위"){
        alert("졌습니다.")
    } else {
        alert("이겼습니다.")
    }
    clearInterval(timerId);
};

var rockEl = document.getElementById("rock");
rockEl.onclick = function(){
    //
    var com = items[currentIndex];
    if(com == "가위"){
        alert("이겼습니다.");
    } else if (com == "바위"){
        alert("비겼습니다.")
    } else {
        alert("졌습니다..")
    }
    clearInterval(timerId);
};

var paperEl = document.getElementById("paper");
paperEl.onclick = function(){
    //
    var com = items[currentIndex];
    if(com == "가위"){
        alert("졌습니다..");
    } else if (com == "바위"){
        alert("이겼습니다.")
    } else {
        alert("비겼습니다.")
    } 
    clearInterval(timerId);
};