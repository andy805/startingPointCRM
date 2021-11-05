import express from "express";
import {index} from "../controllers/users/js"

const router = express.Router()


router.get('/', index)
router.post('/', index)



export {router as userRouter}