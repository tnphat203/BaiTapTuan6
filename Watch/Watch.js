var btnStart = document.querySelector('.btn-start');
var btnStop = document.querySelector('.btn-stop');
var btnReset = document.querySelector('.btn-reset');
var timeMinute = document.querySelector('.minute');
var timeSecond = document.querySelector('.second');

var interval;

function timer() {
    var minute = parseInt(timeMinute.textContent);
    var second = parseInt(timeSecond.textContent);

    second++;

    if (second == 59) {
        minute++;
        second = 0;
    }

    if (second < 10) {
        timeSecond.textContent = '0' + second;
    } else {
        timeSecond.textContent = second;
    }
    if (minute < 10) {
        timeMinute.textContent = '0' + minute;
    } else {
        timeMinute.textContent = minute;
    }
};

btnStart.addEventListener('click', function() {
    if (interval == null) {
        interval = setInterval(timer, 1000);
    }
})
btnStop.addEventListener('click', function() {
    if (interval != null) {
        clearInterval(interval);
        interval = null;
    }
})
btnReset.addEventListener('click', function() {
    clearInterval(interval);
    interval = null;
    timeSecond.textContent = '00';
    timeMinute.textContent = '00';
})