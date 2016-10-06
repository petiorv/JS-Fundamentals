function solve(arr) {
    let text = arr.join('\n').toLowerCase()
        .split(/[^a-zA-Z0-9_]+/).filter(w => w !='');
    let wordCnt = new Map();
    for (let w of text )
        wordCnt.has(w) ? wordCnt.set(w,
            wordCnt.get(w)+1 ): wordCnt.set(w, 1);
    let allWords = Array.from(wordCnt.keys()).sort();
    allWords.forEach(w =>
        console.log(`'${w}' -> ${wordCnt.get(w)} times`))


}

// solve([`Far too slow, you're far too slow.`])