
import express from "express";
import { protection, token } from "./protection.js";
import cookieParser from "cookie-parser";
import session from "express-session";
import { connectedDB, store, isAuth  } from "./session.js";

const PORT = process.env.PORT || 5000;
const app = express();

connectedDB();

app.use(cookieParser());

app.use(
    session({
        secret: "key that will sign cookie",
        resave: false,
        saveUninitialized: false,
        store: store,
    })
);
{/* session */}
app.post("/createsession/:id", (req, res) => {
    try {
        const {id} = req.params;
        req.session.userid = id;
        req.session.isAuth = true;
        console.log(req.session);
        res.send("Session are stored in MongoDB");
    } catch (error) {
        res.send(error);
    }
});

app.get("/accesssession/:id", isAuth, (req, res) => {
    try {
        const {id} = req.params;
        res.send(`Welcome user with ID: ${id} You are authenticated.`);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});

app.post("/removesession", (req,res)=> {
    req.session.destroy((error) => {
        if(error) throw error;
        res.send("Sucessfully destroy remove session in MongoDB");
    })
});


app.post("/createtoken/:id", async(req, res)=> {
    try {
        const {id} = req.params;
        token(id,res);
        res.status(200).json({message: `Token is generated for ${id} succesfully`});
    } catch (error) {
        res.status(500).json({message: `post Internal Server error `}); 
    }
});

app.get("/accesstoken/:id", protection , (req, res) => {
    try{
        const {id} = req.params;
        res.status(200).json({message: `This ${id} can only be access `});
    }catch(error){
        res.status(500).json({message: `get Internal Server error,`}); 
    }
});

app.post("/removetoken/:id", protection , (req, res) => {
    try{
        res.clearCookie("cookie");
        res.status(200).json({message: `This ${id} is removed `});
    }catch(error){
        res.status(500).json({message: `get Internal Server error,`}); 
    }
});

app.listen(PORT, () => {
    try{
        console.log(`Server is running on ${PORT}`);
    }catch(error){
        console.log(`Server error on ${PORT}`);
    }
});

