import express from "express";
import {index} from "../controllers/contacts"

const router = express.Router()


router.get('/', index)

export {router as contactRouter}