const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;
//create schema
const userSchema = new Schema({
    regnumber: String,
    firstname:String,
    lastname: String,
    middlename: String,
    username: String,
    password: String,
    balance: {
        type:Number,
        default: 0
    },
    usertype: String,
    status: {
        type:String,
        default: "active"
    },
    
    
});

//sign jwt and return
userSchema.methods.getSignedJWToken=  function()
{
    return jwt.sign({id: this._id},'jjbg759kjr09566',{
        expiresIn:'3d'
    });
};
userSchema.pre('save', async function(next){
    try{

        //generate a salt
       const salt = await bcrypt.genSalt(10);
       //generate password hash
        const passwordHash = await bcrypt.hash(this.password, salt);
        //re-assign hasshed version of original
        this.password = passwordHash;
        next();
       
    }
    catch(error)
    {
        next(error);

    }

});

//create a model
const Users = mongoose.model('user', userSchema);

//export the model
module.exports = Users;