const express = require('express')
const mongoose = require('mongoose');

const productRoute = require('./routes/product.route');
const Product = require('./models/product.model');
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/products',productRoute);


app.get('/',(req,res) =>{
    res.send('Hello World');
});
// Has been used in the product.controller.js
// app.get('/api/products',async (req,res) => {
//     try {
//         const products = await Product.find({});
//         res.status(200).json(products);
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });

// app.get('/api/products/:id', async (req,res)=>{
//     try {
//         const {id} = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });

// app.post('/api/products',async (req,res) => {
//     try {
//         const product = await Product.create(req.body);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });

// app.put('/api/products/:id',async(req,res) =>{
//     try {
//         const {id} = req.params;
//         const product = await Product.findByIdAndUpdate(id,req.body);

//         if(!product){
//             return res.status(404).json({message: 'Product not found'});
//         }

//         const updatedProduct  = await Product.findById(id);
//         res.status(200).json(updatedProduct);

//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });

// app.delete('/api/products/:id',async(req,res) =>{
//     try {
//         const {id} = req.params;
//         const product = await Product.findByIdAndDelete(id);
//         if(!product){
//             return res.status(404).json({message: 'Product not found'});
//         }
//         res.status(200).json({message: 'Product deleted successfully'});
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// })

mongoose.connect("mongodb+srv://aswin4688:QLQkDThxGiO2SlY2@backenddb.xvo4mi4.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log('Database connected');
    app.listen(3000,() => {
        console.log('Server is running on port 3000');
    })
})
.catch(() =>{
    console.log('Connection failed');
});

