function boardSize(size){
    for(i = 1 ; i <= size ; i++) {
        if (i % 2 == 0){
            console.log("# # # #")
        }else{
            console.log(" # # # #")
        }
    }
}

boardSize(15)
