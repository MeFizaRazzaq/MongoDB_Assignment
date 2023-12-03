const express = require('express');
const app = express();
app.use(express.json());
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

//Port added
app.listen(3000)