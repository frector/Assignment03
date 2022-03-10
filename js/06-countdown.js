let startCount = parseInt(prompt('Enter a number to start the countdown'));
if (isNaN(startCount)) {
    window.alert('That\'s not a number, try again');
} else {
    for (let i = startCount; i > -1; i-- ) {
        console.log(i);
    }
}