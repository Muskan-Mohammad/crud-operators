const db = require('../db.js');

const GET_ALL_PRODUCT_QUERY = `SELECT * from products`;

const getAllProducts = (req , res) => {
    db.serialize(() => {
        db.all(GET_ALL_PRODUCT_QUERY ,
            (error , rows) =>  {
                if(error) {
                    console.log(error);
                    res.status(500).send('Thir is an error in the server')
                } else {
                    for (let i=0 ; i< rows.length; i++){
                        delete rows[i].email;
                    }
                      res.json ({
                        status : true ,
                        products : rows
                      })
                }
            }
            )
    });
};

const getProductsId = (  req , res) => {
    const product_id = req.params.id;
    
    const sql = `SELECT * from products WHERE product_id=${product_id};`;

db.serialize(() => {
    db.get( sql , (err, rows) => {
        if(err || !rows){
            res.status(400).json({status: false , error: `Unable to find product with id: ${product_id}`})    
        } else {
           res.json({ status: true , loans: rows}) 
        }
    })
})

};
module.exports = {
    getAllProducts,
    getProductsId
}