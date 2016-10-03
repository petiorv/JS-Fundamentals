function startCooking(arr) {

    let num = Number(arr[0]);

    for (let i = 1; i <= arr.length-1; i++){
        if (arr[i] == 'chop') num/=2;
        if (arr[i]=='dice') num=Math.sqrt(num);
        if (arr[i]=='spice') num+=1;
        if (arr[i]=='bake') num*=3;
        if (arr[i]=='fillet') num=num-(num*0.2);
        console.log(num);
    }

}

startCooking(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);