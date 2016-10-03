function GradsToRads(arr) {

    let grads = Number(arr[0]);

    let degrees = grads * 0.9;

    if (grads < 0) {
        let result = 360 + (degrees % 360);
        console.log(result)
    }else{
        console.log(degrees % 360);
    }



}

GradsToRads(['400']);