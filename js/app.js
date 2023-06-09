window.onload = function() {    
    start();
}

function start () {
    var hr = new Date().getHours();
    var mn = new Date().getMinutes();
    var sc = new Date().getSeconds();

    var hrClock = document.getElementById('hr');
    var mnClock = document.getElementById('mn');
    var scClock = document.getElementById('sc');

    hrClock.innerHTML = hr + ":";
    mnClock.innerHTML = mn + ":";
    scClock.innerHTML = sc;

    if (sc <= 9) {
        scClock.innerHTML = "0" + sc;
    }
    if (mn <= 9) {
        mnClock.innerHTML = "0" + mn + ":";
    }
    if (hr <= 9) {
        hrClock.innerHTML = "0" + hr + ":";
    }

    setTimeout(start, 1000);
}