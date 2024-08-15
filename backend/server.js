const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const PORT = process.env.PORT || 5000;


const app = express();

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}));
app.use(bodyParser.json());
app.use('/auth', userRoutes);

mongoose.connect("mongodb+srv://gokul:gokul123@backenddb.listy2n.mongodb.net/NodeAPI?retryWrites=true&w=majority&appName=BackendDB")
.then(()=>{
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Server is Running @ ${PORT}`);
        });
})
.catch((error)=>{
    console.log({message: error})
});


