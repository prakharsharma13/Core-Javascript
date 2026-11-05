Object.create() //singleton method

//Object literals

const JsUser = {
    name: "Prakhar",
    age: 23,
    location: "MP",
    email: "prakhar@gmail.com",
    isLoggedIn: false,

}

//two ways to access objects
console.log(JsUser.email)
console.log(JsUser["email"])
