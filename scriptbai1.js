function findOppositeNumber(n, inputNumber) {
    let OppositeNumber;
    if((4 <= n) && (n <= 20) && (n % 2 === 0) && (0 <= inputNumber) && (inputNumber <= n - 1)) {
        if(inputNumber < (n/2)) {
            OppositeNumber = inputNumber + (n/2)
        } else {
            OppositeNumber = inputNumber - (n/2)
        }
        console.log(OppositeNumber)
    } else {alert("Sai")}
}

findOppositeNumber(12,0)
