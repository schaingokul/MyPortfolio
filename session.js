

import session from "express-session";
import mongoose from "mongoose";
import connectMongoDBSession from "connect-mongodb-session";


const MongoDBStore = connectMongoDBSession(session);
const mongoDBURI = "mongodb+srv://schaingokul:2nCVOyttqhPe6BBp@cluster0.vq5in.mongodb.net/netflix?retryWrites=true&w=majority&appName=Cluster0";

export const connectedDB = () =>  mongoose.connect(mongoDBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB is connected");
}).catch((error) => {
    console.error("MongoDB connection error:", error);
});

export const store = new MongoDBStore({
    uri: mongoDBURI,
    collection: 'mySessions',
});

export const isAuth = (req,res,next) => {
    const {id} = req.params;
    if(req.session.isAuth && req.session.userid === id){
        next()
    }else{
        return res.status(401).json({ message: "Session root is protected. Please log in." });
    }
};


