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


Contributors:
    Sankalp Sharma (sharma.sankalp97@gmail.com)
    +ADD MORE+
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


// Event Loop and Program Execution   ---------------------------------------------------------------

/*
This function is written to give an idea about how JavaScript executes a program
*/
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
        eventListeningSimulation = 1

    }
    run()
}

//also example of event delegation, will be proviging a specific example for it too
const simulationEvents = function(e){
    console.log("Simulation div clicked")
    if (e.target.tagName === "BUTTON")
        if (e.target.id === "simulationButton"){
            if (eventListeningSimulation){
                eventListeningSimulation = 0
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
eventListeningSimulation = 1

document.querySelector("#simulation").addEventListener("click", simulationEvents)


// Event bubbling, Event Capturing and Event Delegation   ---------------------------------------------------------------


//No event delegation in this
document.querySelector("#bubblingGrandparent").addEventListener("click", ()=>{
    console.log("Bubbling Grandparent Clicked!")
}, false)
document.querySelector("#bubblingParent").addEventListener("click", ()=>{
    console.log("Bubbling Parent Clicked!")
}, false)
document.querySelector("#bubblingChild").addEventListener("click", ()=>{
    console.log("Bubbling Child Clicked!")
}, false)
document.querySelector("#capturingGrandparent").addEventListener("click", ()=>{
    console.log("Capturing Grandparent Clicked!")
}, true)
document.querySelector("#capturingParent").addEventListener("click", ()=>{
    console.log("Capturing Parent Clicked!")
}, true)
document.querySelector("#capturingChild").addEventListener("click", ()=>{
    console.log("Capturing Child Clicked!")
}, true)
// This is not a good practice

// Event Delegation code
const eventDelegation = function (e) {
    console.log("Event Delegation Parent Box clicked")
    if (e.target.tagName === "DIV")
        if (e.target.id === "delegationBox1"){
            console.log("Box 1 Clicked!")
            }
        else if (e.target.id === "delegationBox2"){
            console.log("Box 2 Clicked!")
        }
        else{
            console.log("Neither Box 1 or Box 2 Clicked!")
        }
}
document.querySelector("#delegationBoxParent").addEventListener("click", eventDelegation, false)

const delegationEvents = function(e){
    if (e.target.tagName === "BUTTON")
        if (e.target.id === "eventDelegationButton"){
            console.log("eventDelegation", eventDelegation)
            var fact = "Fact: Having multiple event listeners on a webpage can hit its performance. Event Delegation helps us in optimizing it."
            document.querySelector("#eventDelegationFact").innerHTML = fact
        }
        else if (e.target.id === "eventDelegationLearn"){
            link1 = "https://youtu.be/aVSf0b1jVKk"
            window.open(link1, "_blank")
            link2 = "https://youtu.be/3KJI1WZGDrg"
            window.open(link2, "_blank")
        }
        else{
            clear()
        }
}
document.querySelector("#eventDelegation").addEventListener("click", delegationEvents, false)




// Throttling & Debouncing   ---------------------------------------------------------------

const normal = function(msg){
    console.log(msg)
}

const throttling = function(normal, limit) {
    let flag = true
    return function(){
        let context = this
        args = arguments
        if (flag){
            flag = false
            normal.apply(context, args)
            setTimeout(() =>{
                flag = true
            }, limit)
        }
    }
}
const throttled = throttling(normal, 500)
const debouncing = function(func, limit) {
    let timer
    return function(){
        let context = this
        args = arguments
        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(context, arguments)
        }, limit)
    }
}
const debounced = debouncing(normal, 500)



const throttlingDebouncing = function (e) {
    if (e.target.tagName === "DIV")
        if (e.target.id === "normalBox"){
            console.log("Normal Box Clicked!")
            }
        else if (e.target.id === "throttledBox"){
            throttled("Throttling Box Clicked")
        }
        else if (e.target.id === "debouncedBox"){
            debounced("Debouncing Box Clicked")
        }
        else{
            console.log("Invalid Click")
        }
}
document.querySelector("#throttlingParent").addEventListener("click", throttlingDebouncing, false)

const throttlingEvents = function(e){
    if (e.target.tagName === "BUTTON")
        if (e.target.id === "throttlingButton"){
            console.log("normal", normal)
            console.log("throttled", throttled)
            console.log("throttling", throttling)
            console.log("debounced", debounced)
            console.log("debouncing", debouncing)
            var fact = "Fact: Debouncing and Throttling are really similar and use of one over the other depends on the scenario at hand."
            document.querySelector("#throttlingFact").innerHTML = fact
        }
        else if (e.target.id === "throttlingLearn"){
            link1 = "https://youtu.be/81NGEXAaa3Y"
            window.open(link1, "_blank")
            link2 = "https://youtu.be/tJhA0DrH5co"
            window.open(link2, "_blank")
            link3 = "https://youtu.be/Zo-6_qx8uxg"
            window.open(link3, "_blank")
        }
        else{
            clear()
        }
}
document.querySelector("#throttling").addEventListener("click", throttlingEvents, false)


// closures
// temporal deadzone
// settimout and closures
// function declaration, expression etc
// call apply bind
// functiion currying
// comments on top do it
//local storage

//try your own js code [input field] a separate js code

