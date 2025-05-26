function countBs(text) {
    let count = 0
    for(let letter of text){
        if (letter === 'B'){
            count++
        }
    }
    return count
}


function countChar(text, char) {
    let count = 0
    for(let letter of text){
        if (letter === char){
            count++
        }
    }
    return count
}


console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));

