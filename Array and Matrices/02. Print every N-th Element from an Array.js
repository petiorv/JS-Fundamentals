function solve(input) {
    let step = Number(input[input.length-1]);


    input.pop();
    let arrlen = input.length-1;

    for (let i = 0; i <= arrlen; i+=step) {
        console.log(input[i]);

    }

}
solve(['5', '20', '31', '4', '20', '2']);