function startHello() { 
    setInterval(display0, 1000)

    console.log("Hello, I am a function declaration.");
  
    console.log("-----------------------------------");
} 

// declareHello()

var startBtnEl = document.getElementById("startBtn")
console.log("startBtnEl",startBtnEl)


startBtnEl.addEventListener("click", startHello);

var timerEl = document.getElementById("timer");
    var count = 9
    function display0() {
      timerEl.innerHTML = count;
      count = count -1
    }