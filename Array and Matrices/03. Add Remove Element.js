function solve(input) {
    let num = 0;
    let result = [];
    for (let i = 0; i <= input.length-1; i++){
        num++;
        if(input[i] == 'add' ){

            result.push(num);
        }
        if(input[i]=='remove')
            result.pop();
    }
    if(result.length<=0)
        console.log('Empty')
    for(let i = 0; i < result.length; i++)
        console.log(result[i])
}
solve(['add', 'add', 'remove', 'add', 'add'])