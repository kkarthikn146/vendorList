const express = require('express');

const router = express.Router();

const VendorList = require('../Models/VendorList');

//Routes 

router.get("/",function (req, res){

    VendorList.find({})
    .then((data)=>{
       // console.log('data:', data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('error:',error)
    });
});


//for a single record

router.get("/:recID",function (req, res){

    const recordID = req.params.recID;

    VendorList.find({id:recordID})
    .then((data)=>{
        res.json(data);
    })
    .catch((error)=>{
        console.log('error:',error)
    });
});




router.post("/save",function (req, res){
   const data = req.body;

   const newVendor = new VendorList(data);

   newVendor.save((error)=>{
       if(error){
           res.status(500).json({msg:'Sorry, Internal server error..'})
       }else{
           res.json({msg:'Your data saved Successfully'});
       }
   });
    
    
});

router.post("/update",function (req, res){
    const data = req.body;
 
    VendorList.findOneAndUpdate({id:data.id}, data , function (err,updated){
        if (err){
            console.log(err);
        }else{
            console.log("Updated successfully");
        }
    });
     
     
 });

 router.post("/delete",function (req, res){
    const dataID = req.body;
    VendorList.findOneAndDelete({id:dataID.delValue}, (err)=>{
          err ? console.log(err) : console.log("Deleted successfully");
    });
     
     
 });

router.get("/name",function (req, res){
    const data = {
        username : "Warner",
        age : 25
    };
    res.json(data);
});

module.exports = router ;
