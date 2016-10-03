function distanceBetweenPoints(arr) {

    let seconds = arr[2];
    let hours = seconds/3600;
    let v1 = arr[0]*1000*hours;
    let v2 = arr[1]*1000*hours;
    let result = Math.abs(v1-v2);

    console.log(result);
}
distanceBetweenPoints([5, -5, 40]);