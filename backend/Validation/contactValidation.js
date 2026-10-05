import Joi from "joi";

const contact = {
    body: Joi.object().keys({
        name: Joi.string().trim().min(2).max(50).required(),
        email: Joi.string().trim().email().required(),
        subject: Joi.string().trim().min(3).max(100).required(),
        message: Joi.string().trim().min(10).max(1000).required()
    })
};

export default contact;