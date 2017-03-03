let Work = require('../models/Work');
let User = require('../models/user');

let portfolioController = {

    getallworks:function(req, res){
        Work.find({user_id: req.params.id}, function(err, works){
            if(err)
                res.send(err.message);
            else{
            	User.findById(req.params.id, function (err, p) {
            		res.render('portfolio.ejs', {works, user : p});
       			 });
            }
            	
        })
        
    }, 
    
    previewwork:function(req, res){
        Work.findById(req.params.id, function(err, work){
            if(err)
                res.send(err.message);
            else{
                User.findById(work.user_id, function (err, p) {
                    res.render('view-work.ejs', {work, user : p});
                 });
            }
                
        })
        
    }

}

module.exports = portfolioController;