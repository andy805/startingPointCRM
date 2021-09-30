import express from "express";
import {index, createAccount, updateAccount} from "../controllers/accounts.js"

const router = express.Router()


router.get('/', index)
router.post('/create', createAccount )
router.put('/update', updateAccount )


export {router as accountRouter}