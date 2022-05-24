const prompt = require('prompt-sync')({sigint: true});

let pinCode = 1234

let inputCode = Number(prompt("Please enter your pincode: "))

if (inputCode === pinCode){
    console.log("Success!")
} else console.log("failure")

