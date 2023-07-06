
var currentDate = new Date();
var lastVisitDate = localStorage.getItem("lastVisitDate");

if (!lastVisitDate) {
    localStorage.setItem("lastVisitDate", currentDate);
} else {
    var timeDiff = currentDate - new Date(lastVisitDate);
    var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    localStorage.setItem("lastVisitDate", currentDate);

    var messageElement = document.getElementById("welcomeMessage");

    if (daysDiff === 0) {
        messageElement.textContent = "Back so soon! Awesome!";
      } else {
        var dayOrDays = (daysDiff === 1) ? "day" : "days";
        messageElement.textContent = "You last visited " + daysDiff + " " + dayOrDays + " ago.";
      }
}