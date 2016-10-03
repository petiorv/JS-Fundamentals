function solve(matrixRow) {
    let matrix;
    matrix = matrixRow.map(
        row => row.split(' ').map(Number));
    let biggestNum = Number.NEGATIVE_INFINITY;
    matrix.forEach(
        r => r.forEach(
            c => biggestNum = Math.max(biggestNum, c)));
    return biggestNum;


}