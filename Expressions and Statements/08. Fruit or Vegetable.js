function Check(input) {


    let fruit = ["banana", "apple", "kiwi", "cherry", "lemon", "grapes", "peach"];
    let vegetable = ["tomato", "cucumber", "pepper", "onion", "garlic", "parsley"];
    let cnt = 0;

    for (let i=0; i <= fruit.length; i++){
        if(input == fruit[i]){
            console.log("fruit");
            cnt++;
         break;
        }

    }
    for (let j = 0; j <= vegetable.length; j++){
        if(input == vegetable[j]){
            console.log("vegetable");
            cnt++;
            break;
        }

    }

    if(cnt == 0)
        console.log("unknown");
}

Check("onion");