function solve(arr) {
    let towns = new Map();
    for(let a of arr){
        let [town, population] = a.split(/\s*<->\s*/);
        population = Number(population);
        if (towns.has(town)){
            towns.set(town, towns.get(town) + population);
        }else{
            towns.set(town, population);
        }
    }
    for(let [town, sum] of towns){
        console.log(town + " : " + sum)
    }

}
solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'
])