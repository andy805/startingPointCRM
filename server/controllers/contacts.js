import Mongoose from "mongoose"
import { Contact } from '../models/contacts'

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
