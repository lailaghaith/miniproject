var mongoose = require('mongoose');


var workSchema = mongoose.Schema({
	title:String,
	user_id:String,
    URL:String,
});


module.exports = mongoose.model('Work', workSchema);
