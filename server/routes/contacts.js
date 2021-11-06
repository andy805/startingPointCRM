import express from "express";
import {index, createContact} from "../controllers/contacts.js"

const router = express.Router()


router.get('/', index)
router.push('/create' , createContact )

export {router as contactRouter}