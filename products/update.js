const db = require('../db.js');

const updateProducts = (req , res) => {
    const product_id = req.params.id;
    const requestBody = req.body;
    const price = requestBody.price;

    const sql = ` UPDATE products SET price="${price}" WHERE product_id = ${product_id}`;

    db.serialize(() => {
        db.exec( sql , (err) => {
            if(err){
                res.status(400).json({status: false , error: `Unable to find products with id: ${product_id}`})
            } else {
                res.json({status: true , message : "Price updation is done successfully"})
            }
        })
    })
};

module.exports = updateProducts;
