import express from 'express'
// import asyncHandler from 'express-async-handler'
const router = express.Router()
// import Product from '../models/productModel.js'
import products from '../data/products.js'
// import { getProducts,getProductById } from '../controllers/productControllers.js'
import { authUser,getUserProfile,registerUser,updateUserProfile,getUsers,deleteUser,updateUser,getUserById } from '../controllers/userController.js'
import { protect,admin } from '../middleware/authMiddleware.js'


// @description Fetch all products
// @route GET / api/products
// @access Public
// router.route('/').get(getProducts)
router.post('/login',authUser)
router.route('/').post(registerUser).get(protect,admin,getUsers)

router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile)

// router.route('/:id').delete(protect,admin,deleteUser)

router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect,admin,getUserById)
  .put(protect,admin,updateUser)
// router.route('/:id').get(getProductById)
 
// @description Fetch singleproducts
// @route GET / api/products/:id
// @access Public
// router.get('/:id',asyncHandler(async (req,res) =>{
//  const product = await Product.findById(req.params.id)

//  if(product){
//   res.json(product)
//  } else { 
//   res.status(404)
//   throw new Error('Product not found')
//  }
 
// }  ))

export default router