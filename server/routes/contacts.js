import express from "express";
import {index, createContact} from "../controllers/contacts.js"

const router = express.Router()


router.get('/', index)
router.post('/create' , createContact )

export {router as contactRouter}