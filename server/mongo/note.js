const mongoose = require('./db.js');
const Schema = mongoose.Schema;

var NoteSchema = new Schema({
    id: { type : Number , required : true },
    title : { type : String , required : true },
    description : { type : String , required : true },
    date : { type : String , required : true }
});

module.exports = mongoose.model('Note', NoteSchema);
