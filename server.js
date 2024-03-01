
const express = require('express');
const mongoose =require('mongoose');
const dotenv =require('dotenv');
const bodyParser=require('body-parser');
const app = express();
const QuestionRouter=require("./Router/question_router");
dotenv.config();


mongoose.connect(process.env.MONGOURL,{ 
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
.then(()=>{console.log("Connected to database")})
.catch((e)=>console.log(e));


app.use(express.json());
app.use(QuestionRouter);
app.use(bodyParser.json());


app.listen(process.env.PORT || 8000, () => console.log(`Port is ${process.env.PORT}!`))