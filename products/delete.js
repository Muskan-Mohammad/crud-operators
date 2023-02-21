const db = require('../db.js');

const deleteProducts = (req , res) => {
    const product_id = req.params.id;
    const sql = `DELETE from products WHERE product_id =${product_id}; `;

    db.serialize(() => {
        db.get(sql , ( err ) => {
            if(err){
                res.status(400).json({status: false , error: `Can't delete the product with the id`})        
            } else {
                
                res.json({
                    status: true , 
                    message : "The following loan history was deleted" })  
            }
        })
    })
};

module.exports = deleteProducts;