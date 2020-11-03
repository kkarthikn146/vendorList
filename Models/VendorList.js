const mongoose = require('mongoose');


const VendorSchema = mongoose.Schema({
    id:String,
    vendorName : String ,
    title: String ,
    contactEmail: String ,
    websiteURL: String

});

//model
const VendorList = mongoose.model('VendorList',VendorSchema);

module.exports = VendorList;