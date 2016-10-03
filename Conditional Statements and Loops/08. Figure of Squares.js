function printSquare (num){
    let n = Number(num);
    let pipe = '-';

    let col = n - 2;
    if (n <= 2) {
        console.log("+".repeat(3));
    }else {


        console.log(`+${pipe.repeat(col)}+${pipe.repeat(col)}+`);
        printMiddle(n);
        console.log(`+${pipe.repeat(col)}+${pipe.repeat(col)}+`);
        printMiddle(n);
        console.log(`+${pipe.repeat(col)}+${pipe.repeat(col)}+`);

    }


function printMiddle(n) {

    let space = ' ';
    if (n%2==0) {
        let row = col-2;
        for (let i = 1; i < row; i++) {

            console.log(`|${space.repeat(col)}|${space.repeat(col)}|`)
        }
    }else {
        let row = Math.floor(n - 3)/2;
        for (let i = 1; i <= row; i++) {

            console.log(`|${space.repeat(col)}|${space.repeat(col)}|`)
        }

    }
}

}

printSquare(200);