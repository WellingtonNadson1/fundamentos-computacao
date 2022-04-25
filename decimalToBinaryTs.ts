function decimalToBinaryTs(decimal: number): number {

    let division = (decimal: number): number => Math.trunc(decimal / 2)

    let array: number[] = [decimal]

    while (division(decimal)) {
        decimal = division(decimal)
        array.push(decimal)
    }

    let newArray = parseInt(array.map((el) => el % 2).reverse().join(''))

    return newArray
}


console.log(decimalToBinaryTs(42))