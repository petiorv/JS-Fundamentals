function solve(arr) {

    let result = arr.join('');

    let pattern = /\d+/g;

    let fuck = result.match(pattern);
    console.log(fuck.join(' '))

}
solve(['The300 What is that? I think it’s the 3rd movie. Lets watch it at 22:45'])