function Rounding(arr) {

    let numsAfter=arr[0].split('.');

    if(numsAfter[1].length>=arr[1]){
        let num = Number(arr[0]).toFixed(arr[1]);
        console.log(num);
    }else{
        console.log(arr[0]);
    }


}
Rounding(['10.5', '3']);