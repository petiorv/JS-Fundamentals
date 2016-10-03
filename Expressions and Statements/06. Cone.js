function VolumeAndArea([r, h]) {


    let v = (1/3)*Math.PI*r*r*h;
    let s = Math.sqrt((r*r)+(h*h));
    let l = Math.PI*r*s;
    let B = Math.PI*(r*r);
    let A = (Math.PI*r*s)+ (Math.PI*(r*r));

    console.log(v);
    console.log(A);

}

VolumeAndArea([3, 5]);