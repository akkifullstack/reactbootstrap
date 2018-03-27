let mongoose = require('mongoose');
let slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

let performSchema = new mongoose.Schema({
	data_center:{
		type:String,
		required:true
	},
	vendor:{
		type:String,
		required:true
	},
	serial_no:{
		type:Number,
		required:true	
	},
	last_anamoly:{
		type:Date,
		default:Date.now()
	},
	previous_issue:{
		type:Date,
		default:Date.now()
	}
})



mongoose.model('performance', performSchema)