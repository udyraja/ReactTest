const express = require('express');
const userRoute = express.Router();

// Require Business model in our routes module
let User = require('./business.model');

// Defined store route
userRoute.route('/add').post(function (req, res) {
    let user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'user': 'user added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

// Defined get data(index or listing) route
userRoute.route('/').get(function (req, res) {
    User.find(function(err, useres){
        if(err){
            console.log(err);
        }
        else {
            res.json(useres);
        }
    });
});

// Defined edit route
userRoute.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    User.findById(id, function (err, user){
        res.json(user);
    });
});

//  Defined update route
userRoute.route('/update/:id').post(function (req, res) {
    User.findById(req.params.id, function(err, user) {
        if (!user)
            res.status(404).send("data is not found");
        else {
            user.Firstname = req.body.Firstname;
            user.Lastname = req.body.Lastname;
            user.Address = req.body.Address;
            user.Contact = req.body.Contact;
            user.Birthday = req.body.Birthday;
            user.Email = req.body.Email;


            user.save().then(user => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
userRoute.route('/delete/:id').get(function (req, res) {
    User.findByIdAndRemove({_id: req.params.id}, function(err, user){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = userRoute;