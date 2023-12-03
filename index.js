const express = require('express');
const app = express();
const mongoose= require("mongoose");
const {createProduct,getAllProducts,DeleteProducts,updateProduct} = require("./ProductOperations");
app.use(express.json());

/*
const Furniture=["Chair","Table","Bed","Sofa","cuboard"];

app.get("/", function (req, res) {
    res.send("My Home Page");
})

app.get("/api/Furniture",function(req,res){
    res.send(Furniture);
})

app.get("/api/Furniture/:index",function(req,res){
    if(!Furniture[req.params.index])
        return res.status(400).send("Product not Available__Bad Request")
    res.send(Furniture[req.params.index]);
})

//Put method
app.put("/api/Furniture/:index",function(req,res){
    //console.log(req.body);
    Furniture[req.params.index]=req.body.name;
    res.send(Furniture[req.params.index]);
});
//Delete Method
app.delete("/api/Furniture/:index",function(req,res){
    //console.log(req.body);
    Furniture.splice(req.params.index,1);
    res.send(Furniture[req.params.index]);
});
//Push Method
app.post("/api/Furniture", function (req, res) {
    products.push(req.body.name);
    res.send(Furniture);
});

*/
//connect to mongoose
mongoose.connect("mongodb://localhost/mernstack").then(async ()=>{
    console.log("connnection to mongo");
//    let product = await createProduct("Sofa",5000,"BlueVelvet");
//    console.log(product);
//    let allProducts = await getAllProducts();
//    console.log(allProducts);
//    let delProduct=await DeleteProducts("656cc613f7571e2447a2340b");
//    console.log(delProduct);
let updProducts = updateProduct("656cc6cb5842a48147400781","Stool",2000,"Wooden");
    console.log(updProducts);
}).catch(err=>{
    console.log("not connected to mongo",err);
})
//Port added
app.listen(3000)