var mongoose = require('mongoose');


var workSchema = mongoose.Schema({
	title:String,
	user_id:String,
    Image:String,
});


module.exports = mongoose.model('pics', workSchema);
