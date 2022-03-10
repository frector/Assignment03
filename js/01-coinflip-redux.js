let coinFlip;
let numFlips = parseInt(prompt("How many coin flips do you want to try?"));
if (isNaN(numFlips)) {
    window.alert('Your entry is not a number, refresh and try again');
} else {
    for (let i = 0; i < numFlips; i++) {
        coinFlip = Math.round(Math.random());
        if (coinFlip == 0) {
            console.log("Heads");
        } else {
            console.log("Tails");
        }
    }
}