function modify(num){
    let n = num.toString();
    let sum=0;
    let check=0;
    for(let i=0; i<n.length;i++){
        sum+=Number(n[i]);
    }
    let temp = sum;
    sum/=n.length;
    if(sum<=5){

        do{
            n+=9;
            temp +=9;
            check = temp/n.length;


        }while (check<=5);

        console.log(n);
    }else{
        console.log(n);
    }

}
modify(999);