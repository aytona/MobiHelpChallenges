document.querySelector(".menu").style.display="inline";
document.querySelector(".over").style.display="none";

function startTimer(duration, display) {
    var start = Date.now(), diff, minutes, seconds;

    function timer() {
        diff = duration - (((Date.now() - start) / 1000) | 0);
        
        minutes = (diff / 60) | 0;
        minutes = minutes < 10 ? "0" + minutes : minutes;

        seconds = (diff % 60) | 0;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (diff <= 0) {
            document.querySelector(".menu").style.display="none";
            document.querySelector(".over").style.display="inline";
        }
    };
    timer();
    setInterval(timer, 1000);
}

function showTime() {
    var duration = 60 * 2;
    var display = document.querySelector(".time");
    startTimer(duration, display);
}

function restart() {
    window.location.href = window.location.href;
}