function calculateCartPrice(...num1) {  // ... is rest operator, with that we can add as many parameters as we want
    return num1
}

const user = {
    "username": "prakhar",
    "price": "$5000"
}

function calculatePrice(object) {
    console.log(`Username is ${object.username} and price is ${object.price}`)
}

calculatePrice(user)


const arrayNew = [100, 200, 300, 400]

function arrayFunction(array) {
    return array[1]
}