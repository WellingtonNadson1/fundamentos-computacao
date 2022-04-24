// Sistema Binário (base 2)
/*
0 => 0 (0000)
1 => 1 (0001)
2 => 10 (0010)
3 => 11 (0011)
4 => 100 (0100)
5 => 101 (0101) */

// Transformation Binary Number for Decimal Number
function binarytoDecimalTs(binaryNumber: number): number{

    let toStrArray: string[], toNumberArray: number[], regressIndexArray: number[], result: number

    toStrArray = binaryNumber.toString().split('')

    toNumberArray = toStrArray.map(Number).reverse()

    regressIndexArray = toNumberArray.map((_, i) => i)

    result = toNumberArray
    .map((element, regressIndexArray) => element * 2 ** regressIndexArray)
    .reduce((acc, currentValue) => acc + currentValue);

    return result
}

console.log(binarytoDecimalTs(10011))
