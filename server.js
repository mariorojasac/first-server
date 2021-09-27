// require our dependecies
const { response } = require('express')
const express = require('express')

// initilaize the express app 
const app = express()

// define some routes and responses to those routes
app.get("/", (req, res) => {
    console.log("Oh hey! I got a request. Let me respond with something")
    res.send("Hello World!")
})

// heres our new route definition!
app.get("/somedata", (request, response) => {
    response.send("here is your information")
})


// tell express to listen for requesr from the browser aka client 

app.listen(3000, () => {
    console.log("express is listening for requests from the browser")
})