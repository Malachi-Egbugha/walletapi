const mongoose= require('mongoose');
const connectDb = async () =>{
    try{
const conn = mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
       useCreateIndex:true,
       useFindAndModify: false,
       useUnifiedTopology:true
})
console.log(`Database Connected`);
    }
    catch(err)
    {
        console.log(err)
    }
}
module.exports = connectDb;