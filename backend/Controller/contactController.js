import contactService from "../Services/contactService.js";


const contactController = async(req, res)=> {
    
    const contact = await contactService(req.body);
    
    if(!contact){
        return res.status(400).json({
            success: false,
            message: "invalid contact details"
        })
    }
    
    return res.status(201).send({
        message: "data added successfully",
        data: contact
    });
}

export default contactController;