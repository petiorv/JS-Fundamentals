function solve([arr]) {
    let pattern = /\b[_{1}]([a-zA-Z0-9]+)\b/;
    let result = [];
    let regex = new RegExp(pattern, 'g');
    let match  = regex.exec(arr);
    while (match){
        result.push(match[1])
        match  = regex.exec(arr);
    }
    console.log(result.join(','));




}