// add bongo cat on top
// create a nav bar for fast support page and about me etc
// title logo with yellow JS text and marquee of contributors
// add video redirect links to concepts of akshay saini
// add QR code UPI for support developer and paypal and github link (or to make this site go live and become an opensource community)

// =================================================   MESSAGE    =======================================================

/*
Developed by Sankalp Sharma
Email: sharma.sankalp97@gmail.com
Website: sharmasankalp.com
I was a newbie with JS when I developed this. Learnt all the stuff from Akshay Saini (youtube), you can check that out!
Also, if you feel like you can contribute to the website through your skills, feel free to read out to me. (Please do, if you want to make significant changes)
If you are only interested in minor changes/fixes or improvements, you can create a pull request on github.
*/


// ====================================================   CODE    ========================================================


// Common Helper functions     -------------------------------------------


/*
This statement is to clear the console (common for every study example)
*/
const clear = function(){
    console.clear()
}


// Hoisting     ----------------------------------------------------------


/*
This function (hoisting) is the example for hoisting in JavaScript
It has two examples within it
*/
const hoisting = function (){
    console.log("This example is for HOISTING!!!\n")
    console.log("Example 1")    //example 1
    var x = 7
    function getName(){
        console.log("Example 1: I am learning Hoisting")
    }
    getName()
    console.log("variable x: ", x)

    console.log("\nExample 2")  //example 2
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


    var fact = "Fact: The ability of functions to get assigned to variables, passed as arguments, return functions make JS support First Class Functions. "
    fact += "\nThe functions which treat other functions as variables are called Higher Order Functions."
    document.querySelector("#hoistingFact").innerHTML = fact
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
            window.open(link, "_blank")
        }
        else{
            clear()
        }
}

document.querySelector("#hoisting").addEventListener("click", hoistingEvents)


// Scope & Variables   ---------------------------------------------------------------


/*
This function is written to give an idea about Scope chains, shadowing in JS
*/


//
const scope = function(){
    console.log("Example 1: Focused on call stack")    //example 1
    var x = 1
    console.log("var 'x' inside GEC: ", x)
    console.log("Invoking function 'a' and 'b'")
    a()
    b()
    function a(){
        console.log("Function 'a' invoked!")
        var x = 10
        console.log("var 'x' inside function 'a': ", x)
    }
    function b(){
        console.log("Function 'b' invoked!")
        var x = 100
        console.log("var 'x' inside function 'b': ", x)
    }

    console.log("Example 2: Focused on Lexical Environment")    //example 2
    function outer(){
        console.log("Inside outer function")
        console.log("variable 'value' inside 'outer' function: ", value)
        inner()
        function inner(){
            console.log("Inside inner function")
            console.log("variable 'value' inside 'inner' function: ", value)
        }
    }
    var value = 10
    console.log("var 'value' inside Global Scope: ", value)
    outer()

    console.log("Example 3: Focused on block scopes" )  //example 3
    {
        console.log("Creating p,q,r inside a block scope")
        var p = 10
        let q = 20
        const r = 30
        console.log("We are currently in the block scope")
        console.log("var p: ", p)
        console.log("let q: ", q)
        console.log("const r: ", r)
    }
    console.log("Came out of the block scope")
    try{
        console.log("var p: ", p)

        console.log("let q: ", q)
    }
    catch{
        console.log("Error!")
    }
    try{
        console.log("const r: ", r)
    }
    catch{
        console.log("Error!")
    }

    console.log("Example 4: Focused on shadowing")  //example 4
    var block_var = 100
    console.log("var 'block_var' initialised: ", block_var)
    {   
        var block_var = 10
        console.log("var 'block_var' reinitialsed inside block: ", block_var)
    }
    console.log("var 'block_var' outside block: ", block_var)

    let block_let = 100
    console.log("let 'block_let' initialised: ", block_let)
    {   
        let block_var = 10
        console.log("let 'block_let' reinitialsed inside block: ", block_let)
    }
    console.log("let 'block_let' outside block: ", block_let)

    const block_const = 100
    console.log("const 'block_const' initialised: ", block_const)
    {   
        const block_const = 10
        console.log("const 'block_const' reinitialsed inside block: ", block_const)
    }
    console.log("const 'block_const' outside block: ", block_const)
    var fact = "Fact: Functions are treated as variables. let and const cannot be reinitialised with same scope, const cannot be overwritten within same scope. "
    fact += "\nLexical environment is the local scope of the block/functions and their parent's lexical environment."
    document.querySelector("#scopeFact").innerHTML = fact
}

//also example of event delegation, will be proviging a specific example for it too
const scopeEvents = function(e){
    console.log("Scope div clicked")
    if (e.target.tagName === "BUTTON")
        if (e.target.id === "scopeButton"){
            scope()
        }
        else if (e.target.id === "scopeLearn"){
            link1 = "https://youtu.be/uH-tVP8MUs8"
            window.open(link1, "_blank")
            link2 = "https://youtu.be/lW_erSjyMeM"
            window.open(link2, "_blank")
        }
        else{
            clear()
        }
}

document.querySelector("#scope").addEventListener("click", scopeEvents)


const simulation = function(){
    statements = [
        "console.log('Start')",
        "setTimeout(xxxxx)", //"setTimeout(function callBackTimeoutFunction(){console.log('CallBack setTimeout')}, 5000)",
        "fetch(xxxx)",    //"fetch('XYZ API call').then(function callBackFunctionFetch(){console.log('API call')})",
        "more code (More Code Output)....",
        "console.log('End')"
    ]

    const start = function(){
        document.querySelector("#simulationParent").innerHTML = `<div>
        <h3 class="simulationHeading">
            Event Loop Waiting for Call Stack to get Empty
        </h3>
    </div>
    <div>
        <h3 class="simulationHeading">
            Call Stack
        </h3>
        <p id="simulationCallStack" class="simulationCalls"></p>
    </div>
    <div>
        <h3 class="simulationHeading">
            MicroTask Queue
        </h3>
        <p id="simulationmicrotaskQueue" class="simulationCalls"></p>
    </div>
    <div>
        <h3 class="simulationHeading">
            CallBack Queue
        </h3>
        <p id="simulationcallbackQueue" class="simulationCalls"></p>
    </div>
    <div>
        <h3 class="simulationHeading">
            Console Output
        </h3>
        <p id="simulationconsoleOutput" class="simulationCalls"></p>
    </div>`
    }

    const end = function(){
        document.querySelector("#simulationParent").innerHTML = ""
    }

    const reset = function(){
        document.querySelector("#simulationCallStack").innerHTML = "Empty"
        document.querySelector("#simulationmicrotaskQueue").innerHTML = "Empty"
        document.querySelector("#simulationcallbackQueue").innerHTML = "Empty"
        document.querySelector("#simulationconsoleOutput").innerHTML = "Empty"
    }

    const display = function(i){
        switch(i){
            case (0):{
                document.querySelector("#simulationCallStack").innerHTML = statements[i]
                document.querySelector("#simulationmicrotaskQueue").innerHTML = "Empty"
                document.querySelector("#simulationcallbackQueue").innerHTML = "Empty"
                document.querySelector("#simulationconsoleOutput").innerHTML = "Empty"
                break
            }
            case(1):{
                document.querySelector("#simulationCallStack").innerHTML = statements[i]
                document.querySelector("#simulationmicrotaskQueue").innerHTML = "Empty"
                document.querySelector("#simulationcallbackQueue").innerHTML = "Empty"
                document.querySelector("#simulationconsoleOutput").innerHTML = "Start"
                break
            }
            case(2):{
                document.querySelector("#simulationCallStack").innerHTML = statements[i]
                document.querySelector("#simulationmicrotaskQueue").innerHTML = "Empty"
                document.querySelector("#simulationcallbackQueue").innerHTML = "Empty"
                document.querySelector("#simulationconsoleOutput").innerHTML = "Start"
                break
            }
            case(3):{
                document.querySelector("#simulationCallStack").innerHTML = statements[i]
                document.querySelector("#simulationmicrotaskQueue").innerHTML = "callBackFunctionFetch(){console.log('API call')}"
                document.querySelector("#simulationcallbackQueue").innerHTML = "Empty"
                document.querySelector("#simulationconsoleOutput").innerHTML = `Start`
                break
            }
            case(4):{
                document.querySelector("#simulationCallStack").innerHTML = statements[i]
                document.querySelector("#simulationmicrotaskQueue").innerHTML = "callBackFunctionFetch(){console.log('API call')}"
                document.querySelector("#simulationcallbackQueue").innerHTML = "Empty"
                document.querySelector("#simulationconsoleOutput").innerHTML = `Start<br>More Code Output`
                break
            }
            case(4):{
                document.querySelector("#simulationCallStack").innerHTML = statements[i]
                document.querySelector("#simulationmicrotaskQueue").innerHTML = "callBackFunctionFetch(){console.log('API call')}"
                document.querySelector("#simulationcallbackQueue").innerHTML = "callBackTimeoutFunction(){console.log('CallBack setTimeout')}"
                document.querySelector("#simulationconsoleOutput").innerHTML = `Start<br>More Code Output`
                break
            }
            case(5):{
                document.querySelector("#simulationCallStack").innerHTML = "Empty (Event loop was waiting for this)"
                document.querySelector("#simulationmicrotaskQueue").innerHTML = "callBackFunctionFetch(){console.log('API call')}"
                document.querySelector("#simulationcallbackQueue").innerHTML = "callBackTimeoutFunction(){console.log('CallBack setTimeout')}"
                document.querySelector("#simulationconsoleOutput").innerHTML = `Start<br>More Code Output<br>End`
                break
            }
            case(6):{
                document.querySelector("#simulationCallStack").innerHTML = "callBackFunctionFetch(){console.log('API call')}"
                document.querySelector("#simulationmicrotaskQueue").innerHTML = "Empty"
                document.querySelector("#simulationcallbackQueue").innerHTML = "callBackTimeoutFunction(){console.log('CallBack setTimeout')}"
                document.querySelector("#simulationconsoleOutput").innerHTML = `Start<br>More Code Output<br>End`
                break
            }
            case(7):{
                document.querySelector("#simulationCallStack").innerHTML = "callBackTimeoutFunction(){console.log('CallBack setTimeout')}"
                document.querySelector("#simulationmicrotaskQueue").innerHTML = "Empty"
                document.querySelector("#simulationcallbackQueue").innerHTML = "Empty"
                document.querySelector("#simulationconsoleOutput").innerHTML = `Start<br>More Code Output<br>End<br>API call`
                break
            }
            case(8):{
                document.querySelector("#simulationCallStack").innerHTML = "Empty"
                document.querySelector("#simulationmicrotaskQueue").innerHTML = "Empty"
                document.querySelector("#simulationcallbackQueue").innerHTML = "Empty"
                document.querySelector("#simulationconsoleOutput").innerHTML = `Start<br>More Code Output<br>End<br>API call<br>CallBack setTimeout`
                break
            }
            default:{
            }
    	}
        return
    }

    const update = async(i) => {
        switch(i){
            case (0):{
                console.log("console.log('Start') pushed into call stack'")
                break
            }
            case (1):{
                console.log("SetTimeout is called with a call back, Browser API starts the timer for 5 seconds")
                break
            }
            case (2):{
                console.log("Fetch API from browser has been called to make a network call and a promise is made")
                break
            }
            case (3):{
                console.log("Response from a network all is recieved and added to MicroTask Queue while program moved forward")
                break
            }
            case (4):{
                console.log("Timer of 5seconds is finished and callback function is pushed to callBack Queue while more code is executed")
                break
            }
            case (5):{
                console.log("Program Ends and call stack gets free, which was constantly being checked by Event Loop")
                break
            }
            case (6):{
                console.log("Event loops fetch and put the task from MicroTask Queue to call stack (Priority: MicroTask Queue > CallBacks Queue)")
                break
            }
            case (7):{
                console.log("Event loops fetch and put the task from CallBack Queue as call stack gets empty and there no job in McroTask Queue")
                break
            }
            case (8):{
                console.log("Program Ends")
                break
            }
            default:{
            }
        }
        display(i)
        return

    }

    const delay = ms => new Promise(res => setTimeout(res, ms))
    const myDelay = async (interval) => {
    await delay(interval)
    return

  }

    const run = async() => {
        start()
        reset()

        for (let i = 0; i<9; i++){
            await update(i)
            await myDelay(5000)

        }
        reset()
        end()
        eventListening = 1

    }
    run()
}

//also example of event delegation, will be proviging a specific example for it too
const simulationEvents = function(e){
    console.log("Simulation div clicked")
    if (e.target.tagName === "BUTTON")
        if (e.target.id === "simulationButton"){
            if (eventListening){
                eventListening = 0
                simulation()
            }
        }
        else if (e.target.id === "simulationLearn"){
            link1 = "https://youtu.be/8zKuNo4ay8E"
            window.open(link1, "_blank")
        }
        else{
            clear()
        }
}
eventListening = 1

document.querySelector("#simulation").addEventListener("click", simulationEvents)

//event loop and everything
// closures
//temporal deadzone
//settimout and closures
//js execution using html etc complete manipulation
// function declaration, expression etc
//call apply bind
//functiion currying
//event bubbling and capturing
//event delegation
//throttling
//debouncing

//try your own js code [input field]

