function solve([n, k]) {
    let result = [];
    result.push(1);
    for(let i = 1; i < n; i++){
        let sum = 0;
        for (let j = result.length - 1; j >= 0 && j >=i - k; j--){
            let previousNum = Number(result[j]);
            sum+=previousNum;
        }
        result.push(sum)
    }
    console.log(result.join(' '))
}
solve(['6', '3'])