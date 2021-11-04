import  Mongoose  from 'mongoose'
import { User } from '../models/user.js'

const index = (req, res) => {
    console.log(req)
    User.find({}, (err, users) => {
        if (err) {
            return err
        } else {
            res.json(
                users
            )
        }
    })
}

export {index}