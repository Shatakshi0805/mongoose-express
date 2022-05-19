const Product = require('./models/product.js');//used to create instances or objects
//hence requiring mongoose to store data or objects in db and requiring Product to build instnace using model
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/farmStand')
.then(() => {
    console.log('Mongoose connection made');
})
.catch(err => {
    console.log('could not connect');
    console.log(err);
})

// const p = new Product({
//     name: 'Grapes',
//     price: 300,
//     category: 'fruit'
// })

// p.save().then(p => {
//     console.log(p);
// })
// .catch(e => {
//     console.log(e);
// })

// const seedProducts = [
//     {
//         name: 'eggplant',
//         price: 500,
//         category: 'vegetable'
//     },
//     {
//         name: 'Goddess Melon',
//         price: 700,
//         category: 'fruit'
//     },
//     {
//         name: 'Seedless Watermelon',
//         price: 400,
//         category: 'fruit'
//     }, 
//     {
//         name: 'Organic Celery',
//         price: 300,
//         category: 'vegetable'
//     },
//     {
//         name: 'Chocolate Whole Milk',
//         price: 350,
//         category: 'dairy'
//     }
// ]
// Product.insertMany(seedProducts)
//     .then(res => {
//     console.log(res);
//     })
//     .catch(e => {
//     console.log(e);
//     })

