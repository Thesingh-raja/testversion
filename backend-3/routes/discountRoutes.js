
import express from 'express'
const router = express.Router()
import {createDiscount,getDiscounts,getDiscountById,updateDiscount} from '../controllers/discountController.js'

import { protect, admin } from '../middleware/authMiddleware.js'
router.route('/').post(createDiscount).get(getDiscounts)
router.route('/:id').get(getDiscountById).put(protect, admin, updateDiscount)

export default router