function timeConversion(s) {
    // Write your code here
    let [hours, minutes, seconds] = s.split(":");
    let am_pm = seconds.substr(2,2);
    seconds = seconds.substr(0,2);
    
    if(hours == "12") hours = "00";
    if(am_pm == "PM") hours = parseInt(hours) + 12;

    return hours + ":" + minutes + ":" + seconds;
}