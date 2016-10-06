function solve(input) {
    let sum = {};
    for (let i = 0; i < input.length; i+=2) {
        let [town, income] = [input[i], Number(input[i+1])];
        if (sum[town]==undefined)
            sum[town]=income;
        else
            sum[town]+=income;
    }
    console.log(JSON.stringify(sum));
}




function solve (arr) {
    let html = '<table>\n'
    for (let i = 0; i < arr.length; i++) {
        let object = JSON.parse(arr[i])
        html += '    <tr>\n'
        html += `        <td>${object.name}</td>\n`
        html += `        <td>${object.position}</td>\n`
        html += `        <td>${object.salary}</td>\n`
        html += '    <tr>\n'
    }
    html += '</table>'

    console.log(html)
}