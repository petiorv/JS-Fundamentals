function distanceIn3D(arr) {

    let x1 = Number(arr[0]);
    let y1 = Number(arr[1]);
    let z1 = Number(arr[2]);

    let x2 = Number(arr[3]);
    let y2 = Number(arr[4]);
    let z2 = Number(arr[5]);

    let a = (x1-x2)*(x1-x2);
    let b = (y1-y2)*(y1-y2);
    let c = (z1-z2)*(z1-z2);

    console.log(Math.sqrt(a+b+c));
}

distanceIn3D([1, 1, 0, 5, 4, 0]);