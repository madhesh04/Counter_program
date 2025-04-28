//COUNTER PROGRAM
// This program is a simple counter that increments a number by 1 each time the user presses the "Increment" button.

const incrementbtn = document.getElementById("increment");  
const resetbtn = document.getElementById("reset");
const decrementbtn = document.getElementById("decrement");
const counterlabel = document.getElementById("counterlabel");
let counter = 0; // Initialize the counter variable to 0

// Function to update the counter label with the current counter value  
incrementbtn.onclick = function() {
    counter++; // Increment the counter by 1
    counterlabel.textContent = counter; // Update the label with the new counter value
}
decrementbtn.onclick = function() {
    counter--; // Increment the counter by 1
    counterlabel.textContent = counter; // Update the label with the new counter value
}
resetbtn.onclick = function() {
    counter = 0; // Increment the counter by 1
    counterlabel.textContent = counter; // Update the label with the new counter value
}