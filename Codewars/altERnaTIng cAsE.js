String.prototype.toAlternatingCase = function () {
    let arr = this.split('')
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].toUpperCase()) {
            newArr.push(arr[i].toLowerCase())
        } else if (arr[i] === arr[i].toLowerCase()) {
            newArr.push(arr[i].toUpperCase())
        }
    }
    return newArr.join('')
}