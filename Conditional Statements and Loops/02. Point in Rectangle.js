function PointInOut(arr) {

    let x = Number(arr[0]);
    let y = Number(arr[1]);

    let xMin = Number(arr[2]);
    let xMax = Number(arr[3]);

    let yMin = Number(arr[4]);
    let yMax = Number(arr[5]);

    if(x <= xMax && x >= xMin && y <= yMax && y >= yMin){
        console.log('inside')
    }
    else{
        console.log('outside')
    }
}