import asyncHandler from 'express-async-handler'
import Discount from '../models/discountModel.js'

const createDiscount = asyncHandler(async (req, res) => {
   console.log(req.body)
  const { discountCode ,discountValue,status,isApplicableToAll,specificProducts,startDate,endDate } = req.body
   
    const discount = await Discount.create({
        discountCode,
		discountValue,
		status,
        isApplicableToAll,
        specificProducts,
		startDate,
        endDate,

    })
    res.status(201).json(discount)
  })

  const getDiscounts = asyncHandler(async (req, res) => {
    const discounts = await Discount.find({})
    res.json(discounts)
  })

  const updateDiscount = asyncHandler(async (req, res) => {
    const {
      discountCode,
      discountValue,
      status,
      isApplicableToAll,
      specificProducts,
      startDate,
      endDate
    } = req.body
  
    const discount = await Discount.findById(req.params.id)
  
    if (discount) {
      discount.discountCode = discountCode
      discount.discountValue = discountValue
      discount.status = status
      discount.isApplicableToAll = isApplicableToAll
      discount.specificProducts = specificProducts
      discount.startDate= startDate
      discount.endDate = endDate
  
      const updatedDiscount = await Discount.save()
      res.json(updatedDiscount)
    } else {
      res.status(404)
      throw new Error('discount not found')
    }
  })
  
const getDiscountById = asyncHandler(async (req, res) => {
    const discount = await Discount.findById(req.params.id)
  
    if (discount) {
      res.json(discount)
    } else {
      res.status(404)
      throw new Error('Discount not found')
    }
  })

  export
  {
    createDiscount,
    getDiscounts,
    updateDiscount,
    getDiscountById
  }