import jwt from "jsonwebtoken";

const KEY = "jsonwebtoken";
const NODE_ENV = "development";

export const token = (id, res) => {
    try {
        const token = jwt.sign({id}, KEY, {expiresIn: "1d"});

        res.cookie("cookie", token, {
            maxAge: 1*24*60*60*1000,
            httpOnly: true,
            secure: NODE_ENV !== "development",
            sameSite: "strict"
        });
    
        return token;  

    } catch (error) {
        res.status(500).json({message: `generate token is error, ${error.message}`})
    }
};


export const protection = (req,res,next) => {
    try {
          const {id} = req.params;
          const token = req.cookies["cookie"];

          if(!token){
            return res.status(400).json({message: `Token not Generated`})
          }

          const extract = jwt.verify(token, KEY);

          if(!extract || extract.id !== id){
            return res.status(400).json({message: `UnAthorized Entry, this ${id} cannot be accessed`})
          }
          next();
         
    } catch (error) {
        res.status(500).json({message: `protection server route is error, ${error.message}`})
    }
};