const ProductModel= require("./models/product");
const createProduct = async (title,price,tag)=>{
    console.log("Cretae Product");
    let product = new ProductModel();
    product.title = title;
    product.price = price;
    product.tag = tag;
    await product.save();
    return product;
};

const updateProduct = async (_id,title,price,tag)=>{
    console.log("Updated Product");
    let product = await ProductModel.findById(_id);
    product.title = title;
    product.price = price;
    product.tag = tag;
    await product.save();
    return product;
};

const DeleteProducts  = async  (_id)=>{
    let product = await ProductModel.findByIdAndDelete(_id);
    return product;
}

const getAllProducts = async  ()=>{
    let products = await ProductModel.find();
    return products;
}

module.exports.createProduct =createProduct;
module.exports.getAllProducts =getAllProducts;
module.exports.DeleteProducts =DeleteProducts;
module.exports.updateProduct =updateProduct;