// Autor: Artur 
setInterval(displayTime, 1000);

function displayTime() {

    const timeNow = new Date();

    let hoursOfDay = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();
    let weekDay = ["Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev", "Pühapäev"]
    let today = weekDay[timeNow.getDay()];
    let months = timeNow.toLocaleDateString("ee", {
        month: "long"
    });

    let year = timeNow.getFullYear();
    
    hoursOfDay = hoursOfDay < 10 ? "0" + hoursOfDay : hoursOfDay;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let time = hoursOfDay + ":" + minutes + ":" + seconds;

    document.getElementById('Clock').innerHTML = time + " " + today + " " + months + " " + year;

}
displayTime();