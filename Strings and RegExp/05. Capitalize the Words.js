function solve([arr]) {
 let result = [];
    result = arr.split(' ');

    for (let i = 0; i < result.length; i++) {
        result[i]=result[i].toLowerCase();
        result[i]=result[i].charAt(0).toUpperCase() + result[i].slice(1);

    }
    console.log(result.join(' '))
}
solve(['Capitalize these words'])