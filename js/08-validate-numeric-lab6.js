let investment = parseFloat(window.prompt('Enter investment amount as xxxx.xx'));
let rate = parseFloat(window.prompt('Enter interest rate as xx.x'));
let years = parseInt(window.prompt('enter number of years'), 10);
if (isNaN(investment)) {
    window.alert('Please enter a number');
} else if (isNaN(rate) && rate > 0 && rate < 10) {
    window.alert('Please enter a number between 0 and 10');
} else if (isNaN(years) && years > 0 && years <= 30) {
    window.alert('Please enter a number between 0 and 10');
}
