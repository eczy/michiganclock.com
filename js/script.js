window.onload = function() {
    insertDays();
    selectRandomImage();
    setAnnArborTime();
};

var images = ["FFOiZ3pXsAMRquz.jpg", "output.gif"]

function insertDays() {
    let last_win = new Date(2019, 10, 30);
    let today = new Date();
    diff = Math.floor((today - last_win) / (60 * 60 * 24 * 1000));
    var daysText = document.getElementById("days");
    daysText.innerText = diff + " days.";
}

function selectRandomImage() {
    let randomNumber = Math.floor(Math.random() * images.length);
    document.getElementById("randomImage").src = "img/" + images[randomNumber];
}

function setAnnArborTime() {
    var annArborTextTime = document.getElementById("annArborTime");
    var date = new Date();
    var timeString = date.toLocaleTimeString(undefined, { timeZone: "America/Detroit", hour: "2-digit", minute: "2-digit" });
    console.log(timeString);
    annArborTextTime.innerText = "It is " + timeString + " in Ann Arbor, and Ohio State still sucks.";
}