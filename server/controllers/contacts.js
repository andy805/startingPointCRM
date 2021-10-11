
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

export {index}