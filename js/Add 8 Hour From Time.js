var time = "23:38";
let [hours, minutes] = time.split(":");

hours = parseInt(hours) + 8;
minutes = parseInt(minutes) + 31;

if(minutes >= 60) {
    hours = hours + 1;
    minutes = minutes - 60;
    
    if(minutes < 10) {
        minutes = "0" + minutes;
    }
}

if(hours >= 24) {
    hours = hours - 24;

    if(hours < 10) {
        hours = "0" + hours;
    }
}

console.log(hours+":"+minutes);