function countLetter(arr) {
    let str=arr[0];
    let letter=arr[1];
    let count = 0;
    for (let i=0; i<str.length; i++)
        if(str[i] == letter)
            count++;
    console.log(count) ;

}

countLetter(['webbstorm', 'b'])