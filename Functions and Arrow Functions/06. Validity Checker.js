function check([x1, y1, x2, y2]) {


    for(let i=0; i<3; i++){
        if (i==0){
            let d = Math.sqrt( (x1-0)*(x1-0) + (y1-0)*(y1-0) );
            console.log(`{${x1}, ${y1}} to {0, 0} is ${checkNum(d)}`);
        }else if (i==1){
            let d = Math.sqrt( (0-x2)*(0-x2) + (0-y2)*(0-y2) );
            console.log(`{${x2}, ${y2}} to {0, 0} is ${checkNum(d)}`);
        }else{
            let d = Math.sqrt( (x1-x2)*(x1-x2) + (y1-y2)*(y1-y2) );
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${checkNum(d)}`);
        }

    }
    function checkNum(d) {
        if(Number.isInteger(d)) return "valid"
        else return 'invalid'


    }

}
check(['3', '0', '0', '4'])