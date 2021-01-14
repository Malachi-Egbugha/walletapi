const Joi = require('joi');
module.exports = {
    validateBody: (schema) => {
        return (req, res, next) => {
            const result = schema.validate(req.body);
            if (result.error)
            {
                return res.status(400).json(result.error.details[0].message);
            }
            //return body.value
            if(!req.value)
            {
                req.value ={};
            }
            req.value['body'] = result.value;
            next();

        }
    },
    schemas: {
    authSchema: Joi.object({
    firstname:Joi.string().required(),
    lastname: Joi.string().required(),
    middlename: Joi.string().required(),
    regnumber:Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    usertype: Joi.string().required(),
    
        })
    }
}