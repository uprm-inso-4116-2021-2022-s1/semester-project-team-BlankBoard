const jwt = require('jsonwebtoken');

module.exports = async(req, res, next) => {
    try{
        const jwtToken = req.header("token");

        if(!jwtToken) return res.status(403).json("Not Authorized");

        const payload = jwt.verify(jwtToken, process.env.jwtSecret);

        req.user = payload.user;   
        next();
    }catch(e){
        console.error(e.message);
        return res.status(403).json("Token is not valid.");
    }
}