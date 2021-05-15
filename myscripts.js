// add bongo cat on top
// title logo with yellow JS text
// add video redirect links to concepts of akshay saini
// add QR code UPI for support and paypal (or to make this site go live and become an opensource community)

/*
Developed by Sankalp Sharma
Email: sharma.sankalp97@gmail.com
Website: sharmasankalp.com
I was a newbie with JS when I developed this. Learnt all the stuff from Akshay Saini (youtube), you can check that out!
Also, if you feel like you can contribute to the website through your skills, feel free to read out to me. (Please do if you want to make significant changes)
If you are only interested in minor changes/fixes or improvements, you can create a pull request on github.


*/

/*
This statement is to clear the console (common for every study example)
*/
const clear = function(){
    console.clear()
}


/*
This function (hoisting) is the example for hoisting in JavaScript
It has two examples within it
*/
const hoisting = function (){
    console.log("This example is for HOISTING!!!\n")
    console.log("Example 1")
    var x = 7
    function getName(){
        console.log("Example 1: I am learning Hoisting")
    }
    getName()
    console.log("variable x: ", x)

    console.log("\nExample 2")
    console.log("Function getNameSecond: ", getNameSecond)
    console.log("Function getNameSecond: ", getNameSecond())
    console.log("variable y: ", y)
    var y = 8
    function getNameSecond(){
        console.log("Example 2: I am still learning Hoisting")
    }
    console.log("variable y: ", y)
    console.log("Function getNameSecond: ", getNameSecond)
    console.log("Function getNameSecond: ", getNameSecond())
    console.log("\n")
}

//also example of event delegation, will be proviging a specific example for it too
const hoistingEvents = function(e){
    console.log("Hoisting div clicked")
    if (e.target.tagName === "BUTTON")
        if (e.target.id === "hoistingButton"){
            hoisting()
        }
        else if (e.target.id === "hoistingLearn"){
            link = "https://youtu.be/Fnlnw8uY6jo"
            window.open(link, "_blank");
        }
        else{
            clear()
        }
}

document.querySelector("#hoisting").addEventListener("click", hoistingEvents)


/*
This function is written to give an idea about Scope chains, shadowing in JS
*/





//scope chain and shadowing //block scope etc etc
// closures
//temporal deadzone
//settimout and closures
//js execution using html etc complete manipulation
//call apply bind
//functiion currying
//event bubbling and capturing
//event delegation
//throttling
//debouncing

//try your own js code [input field]

