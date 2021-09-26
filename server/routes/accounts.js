import express from "express";
import {index, createAccount} from "../controllers/accounts.js"

const router = express.Router()


router.get('/', index)
router.post('/create', createAccount )


export {router as accountRouter}