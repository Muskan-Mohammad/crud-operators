const db = require('../db.js');

const createNewProducts = (req , res) => {
    const productData = req.body;
    const { name , price , description} = productData;

    if(!name){
        res.status(500).send('Please enter the product name');
    }

    if(!price){
        res.status(500).send('Please enter the product name');
    }

    if(!description){
        res.status(500).send('Please enter the product name');
    }
   
    const insertSQL = ` INSERT INTO products (
        name,
        price,
        description
    ) VALUES (
        "${name}",
        "${price}",
        "${description}"
    )`;

    db.serialize(() => {
        db.exec(insertSQL , (error) => {
            if(error){
                res.status(400).json({
                    status : false,
                    error: error
                })
            } else {
                res.json({
                    status: true,
                    message:"New product was created",
                    //  data : productData,
                    // sql: insertSQL
                   })   
            }
        })
    })
};

module.exports = createNewProducts;