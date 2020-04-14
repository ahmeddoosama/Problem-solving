String.prototype.isUpperCase = function () {
    if (this == ' ') return undefined
    else if (this == this.toUpperCase()) return true
    else return false
}