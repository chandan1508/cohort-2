// let sum=0;
// for(let i=0;i<10000000000;i++){
// sum+=i;
// }
// console.log(sum);

//  count down Assignment - 1, task-1

// Function to start the countdown
// function startCountdown(duration) {
//     let timer = duration; // Set the timer to the initial duration

//     // Function to handle the countdown logic
//     function countdown() {
//         console.log(timer); // Print the current timer value

//         timer--; // Decrease the timer value by 1

//         if (timer < 0) {
//             clearInterval(intervalId); // Clear the interval when the timer reaches 0
//             console.log("Countdown finished!"); // Print a message indicating the countdown has finished
//         }
//     }

//     // Set an interval to call the countdown function every second (1000 milliseconds)
//     let intervalId = setInterval(countdown, 1000);
// }

// // Start the countdown from 30
// startCountdown(5);

// Assignment - 1, task-2

// Function to format the time as HH:MM:SS
function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // Pad single digits with a leading zero for consistent HH:MM:SS format
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${hours}:${minutes}:${seconds}`;
}

// Function to display the current time
function displayTime() {
    const now = new Date(); // Get the current date and time
    const timeString = formatTime(now); // Format the time as HH:MM:SS

    // Clear the console and print the current time
    console.clear();
    console.log(timeString);
}

// Update the time every second (1000 milliseconds)
setInterval(displayTime, 1000);

