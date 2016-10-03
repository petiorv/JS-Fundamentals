function printQestAndAsnwer(arr) {

    console.log(`<?xml version="1.0" encoding="UTF-8"?>` + `\n`+ `<quiz>`);
    for (let i = 0; i < arr.length-1; i+=2){

        console.log(`  <question>`+ `\n` + `    `+arr[i] + `\n` +  `  </question>`);
        console.log(`  <answer>`+ `\n` + `    `+arr[i+1] + `\n` +  `  </answer>`)


    }
    console.log(`</quiz>`);

}
printQestAndAsnwer(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"]
);