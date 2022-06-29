import express from "express";
import { updateAccount } from "../controllers/accounts.js";
import {index, createContact, updateContact} from "../controllers/contacts.js"

const router = express.Router()


router.get('/', index)
router.post('/create' , createContact )
router.put('/update', updateContact)
export {router as contactRouter}