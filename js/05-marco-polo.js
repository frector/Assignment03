let n = 100;
for (let i = 1; i <=100; i++){
    if (i % 15 == 0) {
        console.log('Marco Polo!', i);
    } else if (i % 3 == 0) {
        console.log('Marco!', i);
    } else if (i % 5 == 0){
        console.log('Polo!', i);
    }
}