import  Mongoose  from 'mongoose'
import { Contact } from '../models/contacts.js'

const index = (req, res) => {
    Contact.find({}, (err, Contacts) => {
        if (err) {
            return err
        } else {
            res.json(
                Contacts
            )
        }
    })
}

/*create a record */
const createContact = async (req, res) => {
    const newContact = new Contact({
        firstName: "New Contact",
        lastName: "",
        category: "",
        status: "New",
        phone1: "",
        phone2: "",
        email:  "",
        website:  "",
        billingAddress1:  "", 
        billingAddress2:  "",
        billingCity:  "",
        billingState:  "",
        billingZipCode:  "",
        billingCountry:  "",
        shippingAddress1:  "",
        shippingAddress2:  "",
        shippingCity:  "",
        shippingState:  "",
        shippingCountry:  "",
    });
    console.log(newContact);
    
    await newContact.save();
    res.send(newAccount);
}

export {index, createContact}