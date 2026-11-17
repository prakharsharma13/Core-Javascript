const user = {
    username: "Prakhar",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to the website`)
    }
}

user.welcomeMessage()


function chai() {
    let username = "prakhar"
    console.log(this.username) //undefined will be printed
}

const addTwo = (num1, num2) => (num1 + num2) //implicit return, explicit return comes when we use curly braces

const addObject = (num1, num2) => ({ username: "prakhar" }) //if want to return an object using implicit retuens then add curly brace after normal bracket