function Quadratic([a, b, c]){



    let d = (b*b)-4*a*c;
    if(d>0){
        let disc=Math.sqrt(d);
        let x1 = (-b+disc)/(2*a);
        let x2 = (-b-disc)/(2*a);


        console.log(x2);
        console.log(x1);
    }
    else if(d==0){
        let x = -b/(2*a);
        console.log(x);
    }
    else{
        console.log('No')
    }



}

Quadratic([6, 11, -35]);