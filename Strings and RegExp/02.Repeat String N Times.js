function solve(arr) {
    let repeat = Number(arr[arr.length-1]);
    let str = arr[0];
    arr.pop();
    console.log(str.repeat(repeat));

}
solve(['repeat', '5'])