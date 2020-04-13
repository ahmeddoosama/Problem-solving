function calculate(num1, operation, num2) {
    let operations = ['*', '+', '-', '/']
    let sum
    if (!operations.includes(operation)) return null
    else if (operation === '/' && num2 === 0) return null
    else return sum = eval(`${num1.toString()}${operation}${num2.toString()}`)
}