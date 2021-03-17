let x = [1, 2, 3, 4, 5]
let y = [...x]
console.log(y)

y = Array.from(x)
console.log(y)

y = x.slice()
console.log(y)

y = x.map(i => i)
console.log(y)

y = x.filter(() => true)
console.log(y)

y = Object.assign([], x)
console.log(y)
