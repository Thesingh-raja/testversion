import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)

  
  return (
    <section>
			<div class="container">
				<div class="checkout-template page-content">
					<h2>Checkout</h2>
					<div class="checkout-details row">
						<div class="checkout-wrap">
							<div class="checkout-section">
								<div class="contact-info">
									
									<div class="fieldset">
										<h3>Contact information</h3>
										<div class="field-input">
											<label for="name">Name</label>
											<span>
												<input type="text" class="input-text" placeholder="Enter your name"/>
											</span>
										</div>
										<div class="field-input">
											<label for="name">Email Id</label>
											<span>
												<input type="email" class="input-text" placeholder="Enter your email id"/>
											</span>
										</div>
										<div class="field-input">
											<label for="name">Phone</label>
											<span>
												<input type="text" class="input-text" placeholder="Enter your phone no."/>
											</span>
										</div>
										<div class="field-input">
											<label for="name">Address</label>
											<span>
												<input type="text" class="input-text" placeholder="Enter your address"/>
											</span>
										</div>
										<div class="field-input">
											<label for="name">Postal Code</label>
											<span>
												<input type="text" class="input-text" placeholder="Enter your postal code"/>
											</span>
										</div>
									</div>
									
									<div class="fieldset">
										<h3>Shipping Address</h3>
										<div class="field-input">
											<label for="name">Name</label>
											<span>
												<input type="text" class="input-text" placeholder="Enter your name"/>
											</span>
										</div>
										<div class="field-input">
											<label for="name">Email Id</label>
											<span>
												<input type="email" class="input-text" placeholder="Enter your email id"/>
											</span>
										</div>
										<div class="field-input">
											<label for="name">Phone</label>
											<span>
												<input type="text" class="input-text" placeholder="Enter your phone no."/>
											</span>
										</div>
										<div class="field-input">
											<label for="name">Address</label>
											<span>
												<input type="text" class="input-text" placeholder="Enter your address"/>
											</span>
										</div>
										<div class="field-input">
											<label for="name">Postal Code</label>
											<span>
												<input type="text" class="input-text" placeholder="Enter your postal code"/>
											</span>
										</div>
									</div>
									<div class="action-btn">
										<a href="payment.html" class="button button--hollow ">Proceed to Payment</a>
			                    		<a href="cart.html" class="button secondary-btn">Return to Cart</a>
									</div>
								</div>
								<div class="order-summary-right">
									<div class="order-summary__sections">
									    <div class="">
						                    <div class="order-summary__section__content">
						                    	<table class="product-table">
						                    		<thead class="product-table__header">
												        <tr>
												          <th><span class="visually-hidden">Image</span></th>
												          <th><span class="visually-hidden">Description</span></th>
												          <th><span class="visually-hidden">Quantity</span></th>
												          <th><span class="visually-hidden">Price</span></th>
												        </tr>
												    </thead>
												    <tbody>
												    	<tr class="product">
												    		<td class="product__image">
												    			<div class="product-thumbnail ">
																	<div class="product-thumbnail__wrapper">
																	    <img alt="Basic Green T-Shirt" class="product-thumbnail__image" src="images/green-01.jpg"/>
																	</div>
																	<span class="product-thumbnail__quantity">1</span>
																</div>
												    		</td>
												    		<td class="product__description" scope="row">
													            <span class="product__description__name">Basic Green T-Shirt</span>
													            <span class="product__description__variant"></span>
													        </td>
													        <td class="product__quantity">
													            <span class="visually-hidden">1</span>
													        </td>
													        <td class="product__price">
													            <span class="order-summary__emphasis">€52.00</span>
													        </td>
												    	</tr> 
												    	<tr class="product">
												    		<td class="product__image">
												    			<div class="product-thumbnail ">
																	<div class="product-thumbnail__wrapper">
																	    <img alt="Basic Green T-Shirt" class="product-thumbnail__image" src="images/black-01.jpg"/>
																	</div>
																	<span class="product-thumbnail__quantity">1</span>
																</div>
												    		</td>
												    		<td class="product__description" scope="row">
													            <span class="product__description__name">Basic Green T-Shirt</span>
													            <span class="product__description__variant"></span>
													        </td>
													        <td class="product__quantity">
													            <span class="visually-hidden">1</span>
													        </td>
													        <td class="product__price">
													            <span class="order-summary__emphasis">€52.00</span>
													        </td>
												    	</tr> 
												    	<tr class="product">
												    		<td class="product__image">
												    			<div class="product-thumbnail ">
																	<div class="product-thumbnail__wrapper">
																	    <img alt="Basic Green T-Shirt" class="product-thumbnail__image" src="images/pink-01.jpg"/>
																	</div>
																	<span class="product-thumbnail__quantity">1</span>
																</div>
												    		</td>
												    		<td class="product__description" scope="row">
													            <span class="product__description__name">Basic Green T-Shirt</span>
													            <span class="product__description__variant"></span>
													        </td>
													        <td class="product__quantity">
													            <span class="visually-hidden">1</span>
													        </td>
													        <td class="product__price">
													            <span class="order-summary__emphasis">€52.00</span>
													        </td>
												    	</tr>  	
												    </tbody>
						                    	</table>
						                    </div>
						                  
						                    <p class="no-margin evenly-align mt-20">
						                        <span class="cart-total-quantity">3 items</span>
						                        <span class="cart-total-price">
						                        	<span>156,00</span>
						                        </span>
						                    </p>
						                    <div class="cart-subtotal evenly-align cart__total">
						                        <span class="cart-subtotal__title">Discount</span>
						                        <strong><span class="cart-subtotal__price">€20,00</span></strong>
						                    </div>
						                  	<div class="cart-subtotal evenly-align cart__total">
						                        <span class="cart-subtotal__title">Subtotal</span>
						                        <strong><span class="cart-subtotal__price">136,00</span></strong>
						                    </div>
						                    <div class="cart__total evenly-align separator">
						                        <span class="cart__total-text">Total:</span>  
						                        <strong class="cart__total-price text-lg">
						                        	<span>136,00</span>
						                        	<span> EUR</span>
						                        </strong>
						                    </div>
						                </div>
								  	</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  )
}

export default ShippingScreen
