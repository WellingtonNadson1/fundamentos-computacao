// Sistema Binário (base 2)
/*
0 => 0 (0000)
1 => 1 (0001)
2 => 10 (0010)
3 => 11 (0011)
4 => 100 (0100)
5 => 101 (0101) */

// Transformation Binary Number for Decimal Number
function binarytoDecimalTs(...binaryNumber: number[]): number {

    let binaryArray: number[], indexArray: number[], result: number

    binaryArray = binaryNumber.toString().split('').map(Number).reverse()

    indexArray = binaryArray.map((_, i) => i)

    result = binaryArray.map((element, indexArray) => element * 2 ** indexArray)
        .reduce((acc, currentValue) => acc + currentValue);

    return result
}

console.log(binarytoDecimalTs(10011))