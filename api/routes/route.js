let express = require('express');
let mongoose = require('mongoose');
let category = mongoose.model('performance');
let router = express.Router();
let multer = require('multer');

router
	.route('/pernew')
	.post(multer().array(), (req, res, next) => {
         console.log(req.body);
        category
            .create(req.body ,((err, cat) => {
                if(err){
                    res
                        .status(400)
                        .json(err)
                        console.log("Error", cat);

                }else{
                     res
                        .status(200)
                        .json(cat)
                        
                }
            }))
        })
     
router
    .route('/per')
    .get((req, res) => {
        category
            .find()
            .select("-products")
            .exec((err, cats) => {
                console.log("Found category", cats.length)
            res
                .json({'perform':cats})
            })
})

module.exports = router