const Data = num => {
    let mode = [];
    for(let i = 1; i <= num; i++){
        if(i % 2 === 0 && i % 3 !== 0 && i % 5 !== 0){
            mode.push('yu');
        }else if(i % 2 !== 0 && i % 3 === 0 && i % 5 !== 0){
            mode.push('gi');
        }else if(i % 2 !== 0 && i % 3 !== 0 && i % 5 === 0){
            mode.push('oh');
        }else if(i % 2 === 0 && i % 3 === 0 && i % 5 !== 0) {
            mode.push('yu-gi');
        }else if(i % 2 === 0 && i % 3 !== 0 && i % 5 === 0){
            mode.push('yu-oh');
        }else if(i % 2 !== 0 && i % 3 === 0 && i % 5 === 0){
            mode.push('gi-oh')
        }else if(i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
            mode.push('yu-gi-oh');
        }else{
            mode.push(i);
        }
    }
    return mode;
}

console.log(Data(10));