function solve(arr) {
    let rotate = Number(arr[arr.length-1]);
    arr.pop();
    for (let i = 0; i < rotate % Number(arr.length); i++) {
        let tmp = arr[arr.length-1];
        arr.unshift(tmp);
        arr.pop();

    }
    console.log(arr.join(' '));

}
solve(['1', '2', '3', '4', '2']);