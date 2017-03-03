let Work = require('../models/Work');
let User = require('../models/user');


let profileController = {


    createnewwork:function(req, res){
        let work = new Work(req.body);


        work.save(function(err, project){
            if(err){
                res.send(err.message)
            }
            else{
                res.redirect('/profile');
            }
        })
    },

    getallworks:function(req, res){
        Work.find({user_id: req.user._id.toString()}, function(err, works){
            if(err)
                res.send(err.message);
            else
                res.render('profile.ejs', {works, user : req.user});
            
       })
    }

}

module.exports = profileController;