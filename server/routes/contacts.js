import express from "express";
import {index} from "../controllers/contacts.js"

const router = express.Router()


router.get('/', index)

export {router as contactRouter}