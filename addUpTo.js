
let addUpTo2 = n => {
    total = 0;
    for (let i = 1; i <= n; i++){
        total += i
        console.log('i', i)
        console.log('total', total)
    }
    return total
}

console.log(addUpTo2(6))
// addUpTo(6)

let addUpTo1 = n => {
    return n * (n + 1 ) / 2;
}

console.log(addUpTo1(7))
console.log(addUpTo1(3))