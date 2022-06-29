import  Mongoose  from 'mongoose'
import { Contact } from '../models/Contact.js'
import {Account} from '../models/Account.js'


/*note currently hard coding to search for account_id this can and should be refactored to account for mutiple search fields
ie account==account id or user==userid */

const index = async (req, res) => {
    const query= req.query.masterTable
console.log(req.query)
    Contact.find({[query] :req.query.queryID }).populate('account').exec((err, Contacts) => {
        
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

const updateContact = async (req, res) => {

    console.log('body', req.body._id)
  contact= await Contact.findByIdAndUpdate(req.body._id, req.body)
    //  await Contact.findByIdAndUpdate(req.body._id, req.body)
    console.log(contact)
    res.send('updated' )
  
  }

export {index, createContact, updateContact}