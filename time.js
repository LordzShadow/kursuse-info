// Autor: Artur 
setInterval(displayTime, 1000);

// Kalkuleeri kuupäeva tekst ning pane see kella elemendile.
function displayTime() {

    const timeNow = new Date();

    let hoursOfDay = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();
    let weekDay = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"]
    let today = weekDay[timeNow.getDay()];
    let date = timeNow.getDate();
    let month = timeNow.toLocaleDateString("et", {
        month: "long"
    });

    let year = timeNow.getFullYear();
    
    hoursOfDay = hoursOfDay < 10 ? "0" + hoursOfDay : hoursOfDay;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let time = hoursOfDay + ":" + minutes + ":" + seconds;

    document.getElementById('Clock').innerHTML = `${today} ${date}. ${month} ${year} ${time}`;

}
displayTime();