let User = require('../models/user');

let homeController = {

    getallusers:function(req, res){


	         User.find(function(err, users) {
  				 if(err)
	                res.send(err.message);
	            else
	            	
	               	res.render('index.ejs', {users, user : req.user});
			});

    	
    }
}


module.exports = homeController;