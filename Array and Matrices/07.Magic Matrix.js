function solve(input) {
    let sum =0;
    let row=[];
    let tmp = 0;
    let size = Number(input.length);


        for (let i = 0; i < size; i++) {

            row = input[i].split('');
            row = row.map(Number);

            sum = row.reduce((a, b) => a + b, 0);
            if(sum != tmp)
                console.log('false');
            else
                console.log('true');
            tmp = sum;
        }



}
solve(['4 5 6',
    '6 5 4',
    '5 5 5'])