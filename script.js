window.addEventListener('load',calculateTime)

function calculateTime() {
    var date = new Date();
    var dayNumber = date.getDay();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hour >= 12 ? 'PM': 'AM';
    var dayNames = ["SUN","MON","TUES","WED","THU","FRI","SAT"];

    hour = hour % 12;
    hour = hour ? '12' : '12';
    hour = hour < 10 ? '0' + hour : hour;
    minute = minutes < 10 ? '0' + minutes : minutes;

    document.getElementById("day").innerHTML = dayNames[dayNumber];
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("ampm").innerHTML = ampm;

    setTimeout(calculateTime,200);
}