import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Message from '../components/Message'
import {  createDiscount } from '../actions/discountActions'


const AdminCreateDiscountPage = ({history})=>{


	const [discountCode, setDiscountCode] = useState()
  const [discountValue, setDiscountValue] = useState()
  const [status,setStatus] = useState(true);
  const [isApplicableToAll, setIsApplicableToAll] = useState()
  const [ specificProducts, setSpecificProducts] = useState()
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()


  const dispatch = useDispatch()


  const submitHandler = (e) => {
    e.preventDefault()
	
    dispatch(
      createDiscount({
        discountCode,
		discountValue,
		status,
        isApplicableToAll,
        specificProducts,
		startDate,
        endDate,
      })
    )
      history.push('/admin/discountlist')

  }


    return(<>
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
								<h3>TRYNEW</h3>
							</div>
							<div className="view-orders">
								<div className="main-cart-wrapper">
					                <form className="cart__items cart__block" onSubmit={submitHandler}>
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
															<input type="radio" className="input-text" value="true" checked id="enable" name="status" onChange={e=>setStatus(e.target.value)}/>
															Enable
														</label>
													</div>
													<div className="mt-10">
														<label htmlFor="disable">
															<input type="radio" className="input-text" value="false" id="disable" name="status" onChange={e=>setStatus(e.target.value)}/>
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
															<input type="radio" className="input-text" id="all" value="true" name="products" onClick={(e)=>{setIsApplicableToAll(e.target.value)}} /*onClick="javascript:showModal();"*//>
															All Products
														</label>
													</div>
													<div className="mt-10">
														<label htmlFor="specific">
															<input type="radio" className="input-text" id="specific" value="false" name="products" onClick={(e)=>{setIsApplicableToAll(e.target.value)}} /*onClick="javascript:showModal();"*//>
															Specific products
														</label>
													</div>
							                    </div>
							                    <div className="mt-20 discount-period">
							                    	<h4>Active Dates</h4>
							                    	<div className="flex">
							                    		<div className="w-50 pr-10">
							                    			<label htmlFor="">Start Date</label>
								                    		<input type="date" value={startDate} placeholder="" className="" onChange={(e)=>{setStartDate(e.target.value)}}/>
								                    	</div>
								                    	<div className="w-50 pl-10">
							                    			<label htmlFor="">End Date</label>
								                    		<input type="date" value={endDate} placeholder="" className="" onChange={(e)=>{setEndDate(e.target.value)}}/>
								                    	</div>
							                    	</div>
							                    </div>
						                    </div>
						                    
						                </div>
						                <div className="mt-20">
						                	<button type="submit"   className="button checkout_btn button--hollow ">Save</button>
						                	<button className="button css-margin update_btn" ><Link to="/admin/discountlist">Discard</Link></button>
						                </div>
					                </form>
					                <div className="cart__details cart__block add-margin">
						                <div className="order__details-wrap">
						                    <h3>Summary</h3>
						                    <div className="border-t mt-10">
							                    <div className="flex mt-20">
							                    	<p>No information entered yet.</p>
							                    </div>
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
        </>
    )
}

export default AdminCreateDiscountPage