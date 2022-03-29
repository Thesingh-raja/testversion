import React from 'react';
import {Link} from 'react-router-dom'
const AdminOrderDetailsPage = ()=>{
    return(
        <section class="flex">
			<div class="container-fluid">
				<div class="admin-content">
					<div class="admin-left-nav mt-20">
						<ul>
                            <li><Link  to="/admin/productlist">Products</Link></li>
							<li><Link className="active" to="/admin/orderlist">Orders</Link></li>
							<li><Link  to="/admin/discountlist">Discount</Link></li>
						</ul>
					</div>
					<div class="admin-right page-content">
						<div class="products-list">
							<div class="actions flex items-center">
								<h3>#1052</h3>
							</div>
							<div class="actions flex items-center flex-start">
								<span>March 2, 2022 at 12:20 pm</span>
							</div>
							<div class="view-orders">
								<div class="main-cart-wrapper">
					                <div class="cart__items cart__block">
						                <div class="line-items">
						                	<table class="table">
						                		<tr>
						                			<td>
						                				<div class="image-wrapper">
								                            <img class="line-item__image" src="../images/green-01.jpg" alt=""/>
								                        </div>
						                			</td>
						                			<td>
						                				<h2 class="line-item-title">
							                            	<a href="product.html" class="cart__product-title">
							                                	Basic Green Shirt
							                              	</a>
							                            </h2>
							                            <label for="">SKU: <span>WGWB1</span></label>
						                			</td>
						                			<td>
						                				$79.00 × <span>1</span>
						                			</td>
						                			<td>
						                				$79.00
						                			</td>
						                		</tr>
						                	</table>
						                </div>
						                <div class="order__details-wrap mt-10">
						                	<div class="flex">
						                    	<h4>Paid</h4>
						                    </div>
						                    <div class="flex border-t">
						                    	<span>Subtotal</span>
						                    	<span>1 item</span>
						                    	<span>$79.00</span>
						                    </div>
						                    <div class="flex">
						                    	<span>Shipping</span>
						                    	<span>Standard (3.0 kg)</span>
						                    	<span>$7.44</span>
						                    </div>
						                    <div class="flex">
						                    	<span>Tax</span>
						                    	<span>GST 7%</span>
						                    	<span>$5.53</span>
						                    </div>
						                    <div class="flex">
						                    	<span>Discount</span>
						                    	<span>DEAL50</span>
						                    	<span>$10</span>
						                    </div>
						                    <div class="flex">
						                    	<span><strong>Total</strong></span>
						                    	<span><strong>$91.97</strong></span>
						                    </div>
						                    <div class="flex border-t">
						                    	<span>Paid by customer</span>
						                    	<span>$81.97</span>
						                    </div>
						                    <div class="mt-20">
							                	<button class="button update_btn" type="submit">Fulfill Item</button>
				                    			<a href="#" class="button checkout_btn button--hollow ">Create Shipping Label</a>
							                </div>
						                </div>
					                </div>
					                <div class="cart__details cart__block add-margin">
						                <div class="order__details-wrap">
						                    <h4>Customer</h4>
						                    <p><a href="#">John Smith</a></p>
						                    <p>1 orders</p>


						            

						                </div>
						                <div class="order__details-wrap mt-10">
						                	<div class="flex">
						                    	<h4>Contact Information</h4>
						                    	
						                    </div>
						                    <p><a href="#">testemail@gmail.com</a></p>
						                    <p>9876543210</p>
						                </div>
						                <div class="order__details-wrap mt-10">
						                	<div class="flex">
						                    	<h4>Shipping Address</h4>
						                    	
						                    </div>
						                    <p>John Smith</p>
						                    <p>123, New Building</p>
						                    <p>Chennai, 600018</p>
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
export default AdminOrderDetailsPage