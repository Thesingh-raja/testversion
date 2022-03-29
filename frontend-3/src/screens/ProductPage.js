import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Meta from '../components/Meta'
import {
  listProductDetails
} from '../actions/productActions'

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1)

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin



  useEffect(() => {
    
    if (!product._id || product._id !== match.params.id) {
      dispatch(listProductDetails(match.params.id))
     
    }
  }, [dispatch, match])

  const addToCartHandler = () => {
// add or update cart details to database 


    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }


return (<>
  {loading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
  <section>
			<div className="container">
				<div className="product-template page-content">
					<h2>Product Details</h2>
					<div className="product-details row">
						<div className="product-wrap">
							<div className="product-single">
								<div className="product-media">
									<a href="#">
										<img src={product.image} alt={product.name}/>
									</a>
								</div>
								<div className="product-info">
									<div className="right-side">
										<span className="product-sku">SKU: SKU0001</span>
										<h3 className="product-title main-title">{product.name}</h3>
										<div className="price">
			                                <div className="regular-price">
			                                    <span><span className="money" >${product.price}</span></span>
											</div>	  
			    						</div>
			    						<div className="line-item-quantity">
				                            <span className="line-item__quantity-text">Quantity:</span>
				                   <select onChange={(e) => setQty(e.target.value)}>

                           {[...Array(product.inventory).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                           
                            </select>
                                   
				                        </div>
			    						<div className="product-add">
		                                    <button className="button button--alt" name="add" id="add" type="submit" onClick={addToCartHandler} >Add to Bag</button>
		                                </div>
	                                </div>
								</div>
							</div>
							<div className="desc-wrap">
								<h4>Description</h4>
								<div className="detail-desc">
								{product.description}
              	</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</section>
		
  )}
  </>)
}

export default ProductScreen