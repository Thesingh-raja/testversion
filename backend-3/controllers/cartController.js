import asyncHandler from 'express-async-handler'
import Cart from '../models/cartModel.js'

export const addCartItems = asyncHandler(async (req, res) => {
    const {
      cartItems,
      totalPrice,
    } = req.body
  
    if (cartItems && cartItems.length === 0) {
      res.status(400)
      throw new Error('No Cart items')
      return
    } else {
      const cart = new Cart({
        orderItems,
        user: req.user._id,
        
        totalPrice,
      })
      const createdCart = await cart.save()
  
      res.status(201).json(createdCart)
    }
  })