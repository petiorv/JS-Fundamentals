function solve(arr) {
    arr = arr.map(Number);
    let current=0;
    let previous = Number(arr[0]);
    console.log(previous);
    for (let i = 1; i < arr.length; i++) {
        current = arr[i];
        if(previous<=current)
            console.log(current);
        previous=current;

    }
}

solve(['1',
    '3',
    '8',
    '4',
    '10',
    '12',
    '3',
    '2',
    '24'])
