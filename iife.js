//IMEDIATELY INVOKED FUNCTIONS AND EXPRESSIONS IN JS

(function chai() { //named iife as function has name
    let username = "prakhar"
    console.log(this.username)
})() //for iife just put bracket around the function for immediate invoke


((name) => {
    console.log(`Name is ${name}`)
})("Prakhar")