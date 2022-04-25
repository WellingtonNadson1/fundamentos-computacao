
function decimalToBinary(decimal){
    
    let division = (decimal) => Math.trunc(decimal / 2)

    let array = [decimal]
    
    while (division(decimal)) {
        decimal = division(decimal)
        array.push(decimal)
    }
    
    let newArray = Math.trunc(array.map((el) => el % 2 ).reverse().join(''))

    return newArray
}


console.log(decimalToBinary(41))

