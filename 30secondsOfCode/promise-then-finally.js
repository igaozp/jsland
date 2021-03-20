new Promise(((resolve, reject) => resolve(10)))
    .then(x => {
        console.log(x) // 10
        return x + 1 // return value
    })
    .finally(x => {
        console.log(x) // undefined
        return x + 2
    })

new Promise(((resolve, reject) => reject(10)))
    .catch(x => {
        console.log(x) // 0
        throw x
    })
    .then(x => {
        console.log(x) // not run
    })
    .finally(() => {
        console.log('clean up') // 'clean up'
    })
