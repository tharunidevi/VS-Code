//Step 1: Creating express ref, setting up port
const express = require('express');
const app = express();
const PORT = 3000;
//Step 2: Middleware to parse JSON request body
app.use(express.json());
//Step 3: GET route - root
app.get('/', (req, res) => {
    res.send('Welcome to Express');
});
//Step 4: POST route - accepts JSON data 
app.post('/data', (req, res) => {
    res.json({
        message: 'Data recieved sucessfully ',
        YourData: req.body
    });
});
//Step 5: PUT route - update data
app.put('/update', (req,res) => {
    res.json({
        message: 'Data updated sucessfully ',
        YourData: req.body
    });
} );
//Step 6: DELETE route
app.delete('/delete', (req,res) => {
    res.json({
        message: 'Data deleted sucessfully '});
} );
//Step 7: Dynamic route with URL parameter
app.get('/users/:id', (req, res) => {
    res.json({message : `user ID is ${req.params.id}`});
});
//Step 8: Start the server 
    
app.listen(3000,() => {
    console.log(`Server is running at http://localhost:${3000}`);
    });