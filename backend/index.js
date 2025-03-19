//importing necessary packages/modules
require('dotenv').config();
const express = require('express'); // Require function will fetch the express module and assign it to a constant variable named express.
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./Routes/auth');


//Initialize express app
const app = express();

//Middleware
app.use(express.json());
app.use(cors());

//Sample route to test the backend
app.get('/', (req,res) => {
    res.send("Hello from the backend");
})

//MongoDB connection 
mongoose.connect('mongodb://127.0.0.1:27017/resume_builder')
.then(() => console.log("MongoDB connected!"))
.catch((error) => console.error("MongoDB connection error : ", error));

//authentication route
app.use('/api/auth', authRoutes);

//Starting the backend server
const PORT = 5000;
app.listen(PORT, () => {
    console.log("Server is running on port",PORT);
})


