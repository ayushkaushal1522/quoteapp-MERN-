const express = require('express');
const app = express();
const mongoose = require('mongoose');
const seedDB = require('./seeddb');
const quoteRoutes = require('./apis/quoteRoutes')
const cors = require('cors');
const dotenv = require("dotenv");


dotenv.config();
app.use(cors({origin: ['https://black-photographer-hfqmn.pwskills.app:3000']}));

app.use(express.urlencoded({extended:true})); //form data
app.use(express.json()); //json data


app.use(quoteRoutes);
const connecttomongo = async()=>{
    await mongoose.connect(
        process.env.MONGO_URL,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    
    console.log("Connected With database");
    
    
      
    
};

connecttomongo();


app.get('/hello' , (req,res)=>{
    res.status(200).json({msg:"hello from quotesapp"})
})


// seedDB();

const port = process.env.PORT || 8080;
app.listen(port , ()=>{
    console.log(`server connected at port ${port}`)
})