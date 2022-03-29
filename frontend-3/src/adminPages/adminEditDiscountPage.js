import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listDiscountDetails, updateDiscount } from '../actions/discountActions'
import { DISCOUNT_UPDATE_RESET } from '../constants/discountConstants'

const AdminEditDiscountPage = ({match,history})=>{

	const discountId = match.params.id;
	console.log(discountId)
	const [discountCode, setDiscountCode] = useState()
	const [discountValue, setDiscountValue] = useState()
	const [status, setStatus] = useState(true)
	const [isApplicableToAll,setIsApplicableToAll] = useState(true)
	const [specificProducts, setSpecificProducts] = useState()
	const [startDate, setStartDate] = useState()
	const [endDate, setEndDate] = useState()
	
	
	
	const dispatch = useDispatch()
	
	const discountDetails = useSelector((state) => state.discountDetails)
	const { loading, error, discount } = discountDetails
	console.log(discountDetails)
	const discountUpdate = useSelector((state) => state.discountUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = discountUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: DISCOUNT_UPDATE_RESET })
      history.push('/admin/discountlist')
    } else {
      if (discount._id !== discountId) {
        dispatch(listDiscountDetails(discountId))
      } else {
        setDiscountCode(discount.discountCode)
        setDiscountValue(discount.discountValue)
        setStatus(discount.status)
        setIsApplicableToAll(discount.isApplicableToAll)
        setSpecificProducts(discount.specificProducts)
        setStartDate(discount.startDate)
        setEndDate(discount.endDate)
      }
    }
  }, [dispatch, history, discountId, discount, successUpdate])


  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateDiscount({
        _id: discountId,
       discountCode,
	   discountValue,
        status,
        specificProducts,
        isApplicableToAll,
		startDate,
		endDate
      })
    )
  }

  const showModal=()=> {
	var specific = document.getElementById("specific");
	var show_modal = document.getElementById("show-modal");
	if (specific.checked === true) {
		show_modal.style.display = "flex";
	} else {
		show_modal.style.display = "none";
	}
}

const hideModal=()=> {
	var closeModal = document.getElementById("close-modal");
	var show_modal = document.getElementById("show-modal");
	if (show_modal.style.display === "none") {
		show_modal.style.display = "block";
	  } else {
		show_modal.style.display = "none";
	  }
}

    return(
        <section className="flex">
			<div className="container-fluid">
				<div className="admin-content">
					<div className="admin-left-nav mt-20">
						<ul>
                            <li><Link  to="/admin/productlist">Products</Link></li>
							<li><Link to="/admin/orderlist">Orders</Link></li>
							<li><Link className="active" to="/admin/discountlist">Discount</Link></li>
						</ul>
					</div>
					<div className="admin-right page-content">
						<div className="products-list">
							<div className="actions flex items-center">
								<h3>{discountCode}</h3>
							</div>
							<div className="view-orders">
								<div className="main-cart-wrapper">
					                <form onSubmit={submitHandler} className="cart__items cart__block">
						                <div className="form-inline">
						                	<div className="order__details-wrap">
						                		<div className="flex">
							                		<div className="w-50 pr-10">
								                    	<h4>Discount code</h4>
								                    	<input type="text" value={discountCode} placeholder="" className="" onChange={(e)=>setDiscountCode(e.target.value)}/>
							                    	</div>
							                    	<div className="w-50 pl-10">
								                    	<h4>Discount Value (in %)</h4>
								                    	<input type="text" value={discountValue} placeholder="" className="" onChange={(e)=>setDiscountValue(e.target.value)}/>
								                    </div>
							                    </div>
							                    <div className="mt-10">
							                    	<h4>Status</h4>
							                    	<div className="">
														<label htmlFor="enable">
															<input type="radio" className="input-text" value='true' checked id="enable" name="status" onClick={e=>setStatus(e.target.value)}/>
															Enable
														</label>
													</div>
													<div className="mt-10">
														<label htmlFor="disable">
															<input type="radio" className="input-text" value='false' id="disable" name="status" onClick={e=>setStatus(e.target.value)}/>
															Disable
														</label>
													</div>
							                    </div>
							                </div>
							                <div className="order__details-wrap mt-20">    
							                    <div className="">
							                    	<h4>Applies to</h4>
							                    	<div className="">
														<label htmlFor="all">
															<input type="radio" className="input-text" id="all" name="products" onClick={e=>setIsApplicableToAll(true)} onClick={()=>showModal()}/>
															All Products
														</label>
													</div>
													<div className="mt-10">
														<label htmlFor="specific">
															<input type="radio" checked className="input-text" id="specific" name="products" onClick={e=>setIsApplicableToAll(false)} onClick={()=>showModal()}/>
															Specific products
														</label>
													</div>
							                    </div>
					
												<div class="added-products show_modal mt-20">
													<table class="table">
														<tbody>
															<tr>
																<td><span class="admin-list-img"><img src="/images/sample.jpg" alt=""/></span></td>
																<td>
																	<div class="">
																		<a href="edit-product.html"><u>Basic Green Shirt</u></a>
																	</div>
																</td>
																<td class="text-right"><a href="#"><u>Remove</u></a></td>
															</tr>
															<tr>
																<td><span class="admin-list-img"><img src="/images/sample.jpg" alt=""/></span></td>
																<td>
																	<div class="">
																		<a href="edit-product.html"><u>Basic Black Shirt</u></a>
																	</div>
																</td>
																<td class="text-right"><a href="#"><u>Remove</u></a></td>
															</tr>
														</tbody>
													</table>
												</div>

							                    <div className="mt-20 discount-period">
							                    	<h4>Active Dates</h4>
							                    	<div className="flex">
							                    		<div className="w-50 pr-10">
							                    			<label htmlFor="">Start Date</label>
								                    		<input type="date" value={startDate} placeholder="" className="" onChange={e=>setStartDate(e.target.value)}/>
								                    	</div>
								                    	<div className="w-50 pl-10">
							                    			<label htmlFor="">End Date</label>
								                    		<input type="date" value={endDate} placeholder="" className="" onChange={e=>setEndDate(e.target.value)}/>
								                    	</div>
							                    	</div>
							                    </div>
						                    </div>
						                    
						                </div>
						                <div className="mt-20">
						                	<button type='submit' className="button checkout_btn button--hollow ">Save</button>
						                	<button className="button update_btn" >Delete</button>
						                </div>
					                </form>
					                <div className="cart__details cart__block add-margin">
						                <div className="order__details-wrap">
						                    <h3>Summary</h3>
						                    <div className="border-t mt-10">
							                    <div className="flex mt-20">
							                    	<p><strong>Cart Offer</strong></p>
							                    	<span className="color-green">Active</span>
							                    </div>
						                    </div>
						                    <ul className="list-items">
						                    	<li>{discountValue}% off products</li>
						                    	<li>Active from {new Date(discount.startDate).toLocaleString('en-US',{day: 'numeric',year: 'numeric',month: 'long'})}</li>
						                    </ul>
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
export default AdminEditDiscountPage