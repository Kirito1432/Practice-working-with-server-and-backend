const express = require('express'); //Import the express module
const app = express();

app.use(express.json()); //Middleware to parse JSON bodies)

app.use(express.static('public')); //Serve static files from the 'public' directory
const port = 4000; //Define the port number



app.get("/message", (req, res) =>{
    res.json({message: "Hello, World!"}); //Send a JSON response
})



app.listen(port, () =>{
    console.log(`Server is running on port ${port}`); //Log a message when the server starts
})
