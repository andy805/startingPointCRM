import express from "express";
import index from "../controllers/accounts.js"

const router = express.Router()


router.get('/', index)

export {router as accountRouter}