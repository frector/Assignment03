let coinFlip;
let i =0;
do {
    coinFlip = Math.round(Math.random());
    if (coinFlip == 0) {
        console.log("Heads");
    } else {
        console.log("Tails");
    }
    i++;
}
while (coinFlip == 0);