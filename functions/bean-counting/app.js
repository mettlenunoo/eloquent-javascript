function countchar(text , char) {
    let count = 0
    for(let letter of text){
        if (text[letter] === char){
            count++
        }
    }
    console.log(count)
}


countchar('desmond', 'd') 

