var express = require('express')
var router = express.Router();
var jwt = require('jwt-simple')

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

router.post('/', (req, res) => {
    var db = mongoose.createConnection('localhost','test')
    // var noteModel = dbHandle.getModel("note");

    db.on('error',console.error.bind(console,'连接错误:'));
    db.once('open',function(){
        console.log('open')

        var PersonSchema = new mongoose.Schema({
            name:String   //定义一个属性name，类型为String
        });
        var NoteSchema = new mongoose.Schema({
            // name:String   //定义一个属性name，类型为String
            note : {
            		title : { type : String , required : true },
            		description : { type : String , required : true },
            		date : { type : String , required : true }
            	}
        });

        var PersonModel = db.model('Person',PersonSchema);
        var noteModel = db.model('note', NoteSchema);

        //如果该Model已经发布，则可以直接通过名字索引到，如下：
        // var PersonModel = db.model('Person');
        //如果没有发布，上一段代码将会异常

        // var personEntity = new PersonModel({name:'Krouky'});
        // var noteEntity = new noteModel({note : {
        //         title : '12',
        //         description : '8787887',
        //         date : '123-23'
        //     }});
        //打印这个实体的名字看看
        // console.log(personEntity.name); //Krouky

        // noteEntity.save();

        noteModel.find(function(err,notes){
            console.log(notes)
        });
        PersonModel.find(function(err,person){
            console.log(person)
        });

    });
})

module.exports = router
