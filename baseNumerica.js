// Transformation Binary Number for Decimal Number

function binarytoDecimal(...binary){

    let binaryArray, indexArray, result
    
    binaryArray = binary.toString().split('').map(Number).reverse()

    indexArray = binaryArray.map((_, i) => i)

    result = binaryArray.map((element, indexArray) => element * 2 ** indexArray)
    .reduce((acc, currentValue) => acc + currentValue);

    return result
}

console.log(binarytoDecimal(101001))