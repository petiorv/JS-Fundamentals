function solve(arr) {
   arr = arr.map(Number)
    let result = [];
    for(let num of arr){
        if(num >= 0)
            result.push(num);
        else
            result.unshift(num);
    }
    console.log(result.join('\n'));
}
solve(['7', '-2', '8', '9']);