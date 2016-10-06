function solve(arr) {
    let juiceSum=[];
    let bottles = new Map();
    for (let i = 0; i < arr.length; i++) {
        let currentJuicerow = arr[i].split((/\s*\=>\s*/));
        let currentJuice = currentJuicerow[0];
        let currentQuantity = Number(currentJuicerow[1]);
        if(!juiceSum[currentJuice]){
            juiceSum[currentJuice] = {
                quantity: 0
            };
        }

        juiceSum[currentJuice].quantity += currentQuantity;
        if(juiceSum[currentJuice].quantity>=1000){
            let lenghtNumBottles = parseInt(juiceSum[currentJuice].quantity/1000);
            juiceSum[currentJuice].quantity -= lenghtNumBottles*1000;

            if(!bottles.has(currentJuice)){
                bottles.set(currentJuice, 0)
            }
            bottles.set(currentJuice, bottles.get(currentJuice) + lenghtNumBottles)
        }
    }

    for (let [key, value] of bottles){
        console.log(`${key} => ${value}`)
    }

}

solve(['Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'])