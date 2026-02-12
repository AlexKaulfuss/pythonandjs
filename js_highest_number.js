
function findHighest(numbers) {
    let highest = numbers[0];

    for (let num of numbers) {
        if (num > highest) {
            highest = num;
        }
    }

    return highest;
}

console.log(findHighest([3, 7, 2, 9, 5]));
