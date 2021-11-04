import express from "express";
import {index} from "../controllers"

const router = express.Router()


router.get('/', index)
router.post('/', index)



export {router as userRouter}