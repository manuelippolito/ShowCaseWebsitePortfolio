function updateProgrammingTime() {
    // calculate the time elapsed since you started programming
    let startTime = new Date("2022-08-01T09:00:00");
    let elapsedTime = new Date() - startTime;
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  
    // update the content of the <span> element with the formatted time string
    let programmingTime = document.getElementById("programming-time");
    programmingTime.textContent = "I've been programming for " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds.";
  }
  
  // call the updateProgrammingTime function every second to update the time display
  setInterval(updateProgrammingTime, 1000);
  
 