// Transformation Binary Number for Decimal Number
function binarytoDecimal(binaryNumber){

    let toStrArray, toNumberArray, regressIndexArray, result

    toStrArray = binaryNumber.toString().split('')

    toNumberArray = toStrArray.map(Number).reverse()

    regressIndexArray = toNumberArray.map((_, i) => i)

    result = toNumberArray
    .map((element, regressIndexArray) => element * 2 ** regressIndexArray)
    .reduce((acc, currentValue) => acc + currentValue);

    return result
}

console.log(binarytoDecimal(11001))