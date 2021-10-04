import express from "express";
import {index, createAccount, updateAccount, find} from "../controllers/accounts.js"

const router = express.Router()


router.get('/', index)
router.post('/create', createAccount )
router.put('/update', updateAccount )
router.get('/find', find)


export {router as accountRouter}