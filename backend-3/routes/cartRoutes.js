import express from 'express'
const router = express.Router()
import {
  addCartItems
} from '../controllers/cartController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').post(addCartItems)


export default router