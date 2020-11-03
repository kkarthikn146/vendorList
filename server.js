const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const routes = require('./routes/api');



const app = express();
const PORT = process.env.PORT || 8080 ;

mongoose.set('useFindAndModify', false);

mongoose.connect("mongodb+srv://admin-karthik146:karthik146@cluster0.pmlzy.mongodb.net/allVendors", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected',()=>{
    console.log("Mongoose is connected..");
});

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(morgan('tiny'));

app.use("/api",routes);



app.listen(PORT,console.log(`Server running on ${PORT}` ));