const user = {
    username: "Prakhar",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`)
    }
}

user.welcomeMessage()