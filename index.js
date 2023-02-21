const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3');

const {getAllProducts , getProductsId} = require('./products/read.js');
const createProducts = require('./products/create.js');
const deleteProducts = require('./products/delete.js');
const updateProducts = require('./products/update.js');


const app = express();
const port = 3000;
app.use(bodyParser.json());

 app.get(`/products` , getAllProducts);
 app.get(`/products/:id` , getProductsId);
 app.delete(`/products/:id` , deleteProducts );

app.post(`/new-products` , createProducts);
    

app.put(`/products/:id` , updateProducts);
    


app.listen(port , () => {
    console.log(`App is running successfully on http://localhost:${port}`)
});
    


