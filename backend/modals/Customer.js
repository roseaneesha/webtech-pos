const mongoose=require ('mongoose')

const customerSchema= ({
    customerId:{type:Number, required:true},
    customerName:{type:String,required:true},
    mobileNumber:{type:String,required:true},
    previousPurchases:{type:[],required:true}

})

module.exports= Customers = new mongoose.model('customer', customerSchema)