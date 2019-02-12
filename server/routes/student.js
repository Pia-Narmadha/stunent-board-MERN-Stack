const express = require('express');
const router = express.Router();

var Student  = require('.././model/student.js');

//@route GET /api/test
//@desc Tests user route
//@access public
router.get('/test',(req,res) => res.json({'msg':'route works'}));

router.route('/info')
.get(function(req, res) {
    Student.find({},(err, info) => {
        if (err)
            res.send(err);
        //responds with a json object of our database comments.
        res.json(info);
    });
 })
 router.route('/info')
.post(function(req, res) {
    var student = new Student();
    //body parser lets us use the req.body
    student.roll_number = req.body.author;
    student.first_name = req.body.first_name;
    student.last_name = req.body.last_name;
    student.rank = req.body.rank;
    student.save((err) => {
        res.json({ message: 'Student info successfully added!' });
    }).catch(
        (err) => {res.send(err);}
    );
 });
module.exports = router;