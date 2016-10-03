function solve(arr) {
    let text = arr[0].toLowerCase();

    let word = arr[1].toLowerCase();
    let regex = new RegExp('\\b' + word + '\\b', 'g');
    let matches = text.match(regex);
    if (matches){
        console.log(matches.length)
    }else{
        console.log('0')
    }

}
//solve(['There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there']);