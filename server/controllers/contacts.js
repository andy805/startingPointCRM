import  Mongoose  from 'mongoose'
import { Contact } from '../models/Contact.js'

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
    console.log('hit contact create')
    console.log(req.body)
    const newContact = new Contact({
        account: req.body.recordRef,
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
   await newContact.populate("account")
    res.send(newContact);
}

export {index, createContact}