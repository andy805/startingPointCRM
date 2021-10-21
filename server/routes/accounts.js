import express from "express";
import {index, createAccount, updateAccount, find, deleteAccount} from "../controllers/accounts.js"

const router = express.Router()


router.get('/', index)
router.post('/create', createAccount )
router.put('/update', updateAccount )
router.get('/find', find)
router.delete('/delete', deleteAccount)


export {router as accountRouter}