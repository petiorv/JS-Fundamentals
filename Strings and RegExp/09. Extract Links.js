function solve(arr) {

    let regex = /www\.[a-zA-Z0-9-]+?\.[a-z]+([.]{1}[a-z]+)*/g;
    let n = arr.length;
    let result = [];
    for (let i = 0; i < n; i++) {
        let matches = arr[i].match(regex);
        if(matches){
            if(result.indexOf(matches)==-1)
                 result.push(matches);
        }
    }
    console.log(result.join('\n'))
}

solve(['Join WebStars now for free, at www.web-stars.com',
    'You can also support our partners:',
    'Internet - www.internet.com',
   'WebSpiders - www.webspiders101.com',
    'Sentinel - www.sentinel.-ko']);