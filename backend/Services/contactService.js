import { log } from "console";
import Contact from "../Model/contactModel.js";
import fs from 'fs/promises';
import mongoose from "mongoose";
import path from 'path';

const contactService = async(contact)=>{
    // console.log("before service", contact);
    
    const details = await Contact.create(contact);
    // console.log("after service", details);

    const filePath = path.join(process.cwd(), "MongoDB", "contact.json")

    const fileData =await fs.readFile(filePath, "utf-8"); // we reading the json file if any data exist or not
    const contacts = JSON.parse(fileData); // we are parsing /converting the json to array/object.

    console.log("contact", contacts);
    

    const fileContact = {           // we are creating the object by taking the details from user contact i.e contact.
        ...contact,
        id: details._id.toString(),
        createdAt: new Date().toISOString()
    }
    
    contacts.push(fileContact); //pushing the created file into the contacts(contact.json)

    await fs.writeFile(filePath, JSON.stringify(contacts, null, 2)); //save the data to json file in json format.

    return details;
}

export default contactService;