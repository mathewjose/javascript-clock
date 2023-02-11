var noon = 12;

const showCurrentTime = function () {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var session = "AM";

    if(hours >= noon){
        session = "PM"
    }
    else{
        session = "AM"
    }
    if(hours > noon){
        hours = hours - noon;
    }
    if(hours < 10){
        hours = '0' + hours;
    }
    if(minutes < 10) {
        minutes = '0' + minutes;
    }
    if(seconds < 10){
        seconds = '0' + seconds;
    }

    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    document.getElementById('session').innerHTML = session;


}

setInterval(showCurrentTime,10)