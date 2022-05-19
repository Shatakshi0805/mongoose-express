const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Product = require('./models/product.js')

mongoose.connect('mongodb://localhost:27017/farmStand')
.then(() => {
    console.log('Mongoose connnection made');
})
.catch(err => {
    console.log('connection not made');
    console.log(err);
})

app.listen(3000, () => {
    console.log('App is Listening');
})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// app.get('/hello', (req, res) => {
//     res.send('hey hey')
// })

app.get('/products', (req, res) => {
    // const products = await Product.find({});
    // res.send("products here!")
    // console.log(products);
    res.render('products/index.ejs');

})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    // console.log(product);  
    res.render('products/show', { product })
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product });
})

app.get('/products/new', (req, res) => {
    res.render('products/new');
})

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
})