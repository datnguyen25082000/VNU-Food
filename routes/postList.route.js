const router = require('express').Router();
let PostList = require('../models/post.model');

router.route('/').get((req,res) => {
    PostList.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/add').post((req,res) => {
//     const title = req.body.title;
//     const img = req.body.img;
//     const price = Number(req.body.price);
//     const company = req.body.company;
//     const info = req.body.info;
//     const count_num = Number(req.body.count_num);
//     const type = req.body.type;

//     const newProduct = new PostList({
//         title,
//         img,
//         price,
//         company,
//         info ,
//         count_num ,
//         type ,
//     });

//     newProduct.save()
//     .then(() => res.json('productlist added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/:productID').put((req, res) => {
//     var id = req.params.productID;

//     ProductList.findByIdAndUpdate(id, req.body)
//     .then(product => {
//         if(!product) {
//             res.status(404).send({message : "Can not find product with this id"});
//         }
//         else res.send({message : "Update successed!"});
//     })
//     .catch(err => {
//         res.status(500).send({message : "Error updating this id"});
//     })
// });

// router.route('/:productID').delete((req, res) => {
//     var id = req.params.productID;

//     ProductList.findByIdAndRemove(id)
//     .then(product => {
//         if(!product) {
//             res.status(404).send({message : "Can not find product with this id"});
//         }
//         else res.send({message : "Delete successed!"});
//     })
//     .catch(err => {
//         res.status(500).send({message : "Error deleting this id"});
//     })
// });

module.exports = router;