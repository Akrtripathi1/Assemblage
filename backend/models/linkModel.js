const { model, Schema, Types } = require('../connection');

const mySchema = new Schema({
    user: { type : Types.ObjectId, ref : 'user' },
    logo :String,
    title:String,
    description :String,
    facebook :String,
   linkedin :String,
     youtube :String,
     instagram :String,
     github :String,
    sections : Array,
    image : String,
    qrcode : String,
    createdAt: Date
});

module.exports = model( 'links', mySchema );