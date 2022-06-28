import  Mongoose  from 'mongoose'
import { Contact } from '../models/Contact.js'
import {Account} from '../models/Account.js'

/*note currently hard coding to search for account_id this can and should be refactored to account for mutiple search fields
ie account==account id or user==userid */

const index = (req, res) => {
    const query= req.query.masterTable

    Contact.find({[query] :req.query.queryID }, (err, Contacts) => {
        console.log(req.query)
        if (err) {
            return err
        } else {
            Contacts.populate("accounts")
            res.json(
                Contacts
            )
        }
    })
}

/*create a record */
const createContact = async (req, res) => {
    
    console.log(req.body)
    const newContact = new Contact({
        account: req.body.recordRef,
        user: req.body.user._id,
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
    await newContact.populate('account')
    await newContact.save();
    // await newContact.populate('account')
    res.send(newContact);
}

export {index, createContact}