let firstvar=10;

let secondvar=firstvar

secondvar=20
console.log(firstvar)
console.log(secondvar)

let thirdvar=secondvar=firstvar

thirdvar=30
console.log(thirdvar)

// heap demo

let LoginOne={
    username:"atul",
    password:"aassdd"
}

console.log(LoginOne.username)

let LoginTwo=LoginOne

LoginTwo.username="Google"

console.log(LoginTwo.username)
console.log(LoginOne.username)