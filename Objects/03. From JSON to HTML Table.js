function solve([json]){

    let arr = JSON.parse(json);
    let html = '  <table>\n';
    html += '<tr>';
    for(let key of Object.keys(arr[0])){
     html+=`<th>${htmlEscape(key)}</th>`
    }
    html+='</tr>\n';
    for(let object of arr){
        html+=' <tr>';
        for(let key of Object.keys(object)){
            html += `<td>${htmlEscape(object[key] + '')}</td>`
        }
        html+=`</tr>\n`;
    }
    html+=`</table>`;
    console.log(html);
    function htmlEscape (text) {
        return text.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
    }
}
solve(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'])