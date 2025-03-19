const jwt = require('jsonwebtoken');

const JWT_SECRET =  process.env.JWT_SECRET;

const authMiddleware = (req,res,next) => {
    const token = req.header("Authorization");

    if(!token) return res.status(401).json({message : "Access Denied: No token provided."});

    try {
        const decoded = jwt.verify(token, JWT_SECRET); //extract kr rhe h jwt token me se user id ko
        req.user = decoded; // extracted user id ko aage wale route pe bhejne ke liye request me user me add kr rhe h taaki database se data nikal ske user ka
        next(); //ye aage badhayega request ko towards its target url
    } catch (err) {
        res.status(401).json({message: "Invalid token!"});
    }

};

module.exports = authMiddleware;
