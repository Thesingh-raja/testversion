import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'

const HomeScreen = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <div className="container">
      <Meta />
      <div className="product-collection page-content">
      <h1>Collections</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <div className="products-grid row">
          
            {products.map((product) => (
              <div className="grid-item" key={product._id} >
                <Product product={product} />
              </div>
            ))}
       
        </div>
      )}
      </div>
    </div>
  )
}

export default HomeScreen
