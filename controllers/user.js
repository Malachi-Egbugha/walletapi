const User = require('../models/user');
module.exports ={
    
    createupdateuser: async(req, res, next) => {
     
        try{
            
        const  {regnumber} = req.value.body;
        const filter = {regnumber};
        const update = req.body;
        let doc = await User.findOneAndUpdate(filter, update,{
            new: true,
            upsert:true
        });
        console.log(doc);
        if(doc){
           return res.json({doc});
        }
        else{
            return res.json({status: false});
        }

        }
        catch(err)
        {
            //next(err);
            res.json({error:err});
        
        }
       
    },
    

}


