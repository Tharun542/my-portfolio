import Contact from "../Model/contactModel.js";
import {readFile, writeFile} from 'fs/promises';
import path from 'path';
import {fileURLToPath} from "url";

const contactService = async(contact)=>{
    // console.log("before service", contact);
    
    const details = await Contact.create(contact);
    // console.log("after service", details);
    const __fileName = fileURLToPath(import.meta.url);
    const __dirName = path.dirname(__fileName);
    const filePath = path.join(__dirName, "../MongoDB/contact.json")

    const fileData =await readFile(filePath, "utf-8"); // we reading the json file if any data exist or not
    const contacts = JSON.parse(fileData); // we are parsing /converting the json to array/object.

    console.log("contact", contacts);
    

    const fileContact = {           // we are creating the object by taking the details from user contact i.e contact.
        ...contact,
        id: details._id.toString(),
        createdAt: new Date().toISOString()
    }
    
    contacts.push(fileContact); //pushing the created file into the contacts(contact.json)

    await writeFile(filePath, JSON.stringify(contacts, null, 2)); //save the data to json file in json format.

    return details;
}

export default contactService;