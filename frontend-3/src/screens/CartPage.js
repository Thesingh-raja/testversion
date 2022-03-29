import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
  }

return(
  <section>
			<div class="container">
				<div class="cart-template page-content">
					<h2>Cart</h2>
					<div class="cart-count-price">
	                    <p class="no-margin">
	                        <span class="cart-total-quantity">TOTAL: {cartItems.reduce((acc, item) => acc + item.qty, 0)} items</span> 
	                        <strong class="cart-total-price">
	                        	(<span><span id="revy-cart-subtotal-price">€{cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</span></span>)
	                        </strong>
	                    </p>
	                </div>
	                <div class="main-cart-wrapper">
		                <div class="cart__items cart__block">
			                <div class="line-items">

                      {cartItems.map((item) => (
			                	<div class="line-item">
			                		<div class="line-item__left">
		                        		<div class="line-item__image-wrapper">
				                            <img class="line-item__image" src={item.image} alt={item.name}/>
				                        </div>
				                    </div>	
				                    <div class="line-item__right">
				                        <div class="line-item__details">
				                            <h2 class="line-item-title">
				                            	<a href="product.html" class="cart__product-title">
				                                	{item.name}
				                              </a>
				                            </h2>
				                            <a title="Remove item" class="line-item__remove" href="#">
				                            	<svg aria-hidden="true" viewBox="0 0 448 512" class="svg-inline--fa fa-trash-alt fa-w-14 fa-3x">
				                            		<path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" class=""></path>
				                            	</svg>
				                            </a>
				                        </div>
				                        
				                        <div class="line-item__price">
				                            <span><strong>Price:</strong></span>€{item.price}
										</div>
				                      
				                        <div class="line-item__total-amount-price">
				                            <span><strong>Total Price:</strong></span>€{item.price}
										</div>
				                    
				                        <div class="line-item__quantity">
				                            <span class="line-item__quantity-text">Quantity:</span>
				                            <input type="text" name="updates[]" size="4" value={item.qty}/>
				                            <button class="button update_btn" type="submit">Update Quantity</button>
				                        </div>
				                    </div>
			                	</div>
            ))}  
			                </div>
		                </div>
		                <div class="cart__details cart__block">
			                <div class="cart__details-wrap">
			                    <h5>ORDER SUMMARY</h5>
			                    <p class="no-margin evenly-align">
			                        <span class="cart-total-quantity">{cartItems.reduce((acc, item) => acc + item.qty, 0)}  items</span>
			                        <span class="cart-total-price">
			                        	<span>€204,15</span>
			                        </span>
			                    </p>
			                  	<div class="cart-subtotal evenly-align cart__total">
			                        <span class="cart-subtotal__title">Subtotal</span>
			                        <strong><span class="cart-subtotal__price">€{cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</span></strong>
			                    </div>
			                    <div class="cart__total evenly-align">
			                        <span class="cart__total-text">Total:</span>  
			                        <strong class="cart__total-price">
			                        	<span>€{cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</span>
			                        	<span> EUR</span>
			                        </strong>
			                    </div>
			                  	<button class="button update_btn" type="submit">Update Quantity</button>
			                    <a href="/shipping" class="button checkout_btn button--hollow">Checkout</a>
			                  	<div class="cart-promo">
			                    	<h5>ENTER A PROMO CODE</h5>
			                    	<input type="text" id="devPromo"/>
			                    	<a href="#">Apply Coupon</a>
			                  	</div>
			                  	<div class="text-center mt-20">
			                  		<a class="link-text-line" href="/" title="Continue shopping">Continue shopping</a>
			                  	</div>
			                </div>
			              
			            </div>
	                </div>
				</div>
			</div>
		</section>
)
}
export default CartScreen