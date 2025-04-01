//importing necessary packages/modules
require('dotenv').config();//import the .env file
const express = require('express'); // Require function will fetch the express module and assign it to a constant variable named express.
const mongoose = require('mongoose');//mongoos performs mongodb activity
const cors = require('cors');//cross origin resource sharing
const authRoutes = require('./Routes/auth');//these are routes - rasta dikhate hai
const protectedRoutes = require('./Routes/protectedRoutes');

//Initialize express app
const app = express();

//Middleware -  performs different tasks
app.use(express.json());//json - javascript obj notation - easy to read , notation - way to represent every req comes as an object
app.use(cors());

//Sample route to test the backend (req,res) - parameters
app.get('/', (req,res) => {
    res.send("Hello from the backend");
})

//MongoDB connection 
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,//optional 
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected!"))//.then-kind of promise ,it runs after successfully completing the above function
.catch((error) => console.error("MongoDB connection error : ", error));//.catch - catch the error from the function

//authentication route
app.use('/api/auth', authRoutes);
//protected routes
app.use('/api', protectedRoutes);

//Starting the backend server
const PORT = 5000;
app.listen(PORT, () => {
    console.log("Server is running on port",PORT);
})

