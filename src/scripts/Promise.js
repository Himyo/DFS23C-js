// function multiplyByFour(x) {
//     return x * 4
// }

// let result = 5
// console.log(result, '1')

// setTimeout(() => {
//     result = multiplyByFour(result)
//     console.log(result, '2')
// }, Math.floor(Math.random() * 10) * 1000) // Simule une requete : une operation qui a un temps d'execution random

// console.log(result, '3')
// console.log(result === 20, 'console.log hors du setTimeout')

// setTimeout(() => {
//     console.log(result === 20, 'console.log dans un setTimeout')
// }, 3 * 1000) // on essaie d'attendre la fin de l'execution de la "requete"

// Si on se retrouve dans une situation ou on ne sait pas combien de temps l'operation va prendre
// on est bloqué, on peut avoir un resultat different a chaque execution du code 

const myPromise = new Promise(function(resolve, reject) {
    if(Math.floor(Math.random * 2) === 1 ) { // Est egal a true or false de maniere aleatoire
        setTimeout(() => {
            resolve('Hello, from promise') // Va activer les .then et ignorer le .catch
        }, 2 * 1000)
    }
    else {
        reject('oh no an error') // Va activer le .catch et ignorer les .then
    }
})
console.log(myPromise);
myPromise
    .then(response => {
        const message =  `Hello from the then function, message:  ${response}`
        console.log(message)
        return message // va etre utiliser par le .then qui suit 
    })
    .then(response => {
        const finalMessage = `Hello from the other then, message: ${response}`
        return finalMessage
    })
    .catch(error => {
        console.log(`Hello from the catch, message: ${error}`)
    })