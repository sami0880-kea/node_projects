// --- Asynchronous code: ---
// Browser event handlers, network calls, buffers / streams,
// working with files / directories, setTimeout / setInterval,
// databases

// Solution 1. Callback
/// Problem: Callback hell, Pyramid of Doom 

// Solution 2. Promises
/// States:
//// 1. pending
//// 2. Fulfilled
///// - Resolved
///// - Rejected

// Solution 3. Async / Await
/// Syntactic sugar

new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            resolve("Everything OK")
        } catch (error) {
            reject("Nothing OK")
        }
    }, 2000);
})
.then((successMessage) => console.log(successMessage))
.catch((errorMessage) => console.log(errorMessage));

console.log("I'm walking here...");

// ASSIGNMENT:
/*
Create a promisified function that is, a function that returns a new promise
it should be called myPromise and it should either resolve 
as "Something Good" or reject as "Something Bad" create a 3 second 
timeout to simulate asynchronous behavior
*/


function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve("Something good")
            } catch (error) {
                reject("Something bad")
            }
        }, 3000);
    })
}

/* myPromise().then((successMessage) => console.log(successMessage))
.catch((errorMessage) => console.log(errorMessage)); */

function myFetch(URL, options={}) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve({ 
                    json: () => new Promise((resolve, reject) => resolve("Response from fetch"))
                })
            } catch {
                reject({ data: "Something bad" })
            }
        }, 3000);
    })
}

/* myFetch("https://www.samim.dk")
.then((response) => response.json())
.then((result) => console.log(result))
.catch((error) => console.log(error))
 */

// IIFE
(async function main() {
    try {
        const myPromiseResult = await myPromise();
        console.log(myPromiseResult);
    } catch (error) {
        console.log(error);
    }
}) ();