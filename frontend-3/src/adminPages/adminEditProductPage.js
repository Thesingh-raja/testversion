import axios from 'axios'
import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProductDetails, updateProduct } from '../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'

const AdminEditProductPage = ({match,history})=> {
	const productId = match.params.id;

  const [name, setName] = useState('')
  const [sku, setSku] = useState('')
  const [price, setPrice] = useState(0)
  const [inventory,setInventory]= useState(0)
const [status,setStatus] = useState(true);
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const productUpdate = useSelector((state) => state.productUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET })
      history.push('/admin/productlist')
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId))
      } else {
        setName(product.name)
        setPrice(product.price)
        setInventory(product.inventory)
		setSku(product.sku)
       	setStatus(product.status)
        setDescription(product.description)
        setImage(product.image)
      }
    }
  }, [dispatch, history, productId, product, successUpdate])


  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
		sku,
		status,
        image,
        description,
        inventory,
      })
    )
  }

    return (
        <section className="flex">
			<div className="container-fluid">
				<div className="admin-content">
					<div className="admin-left-nav mt-20">
						<ul>
							<li><Link className="active" to="/admin/productlist">Products</Link></li>
							<li><Link to="/admin/orderlist">Orders</Link></li>
							<li><Link to="/admin/discountlist">Discount</Link></li>
						</ul>
					</div>
					<div className="admin-right page-content">

						<div className="products-list">
							{loadingUpdate && <Loader />}
							{errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
							<form onSubmit={submitHandler}>
							<div className="actions flex items-center">
								<h3>{name}</h3>
								<button type="submit" className="button button--hollow  justify-end inline-block">Update</button>
							</div>
							<div className="edit-product">
									<div className="flex">
										<div className="product-lineitems form-section">
				                <div className="form-control">
				                	<label htmlFor="product-name">Product Name</label>
				                	<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
				                </div>
				                <div className="form-control">
				                	<label htmlFor="sku">SKU</label>
				                	<input type="text" value={sku} onChange={(e) => setSku(e.target.value)} />
				                </div>
				                <div className="flex">
					                <div className="form-control pr-10">
					                	<label htmlFor="price">Price ($)</label>
					                	<input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
					                </div>
					                <div className="form-control pl-10">
					                	<label htmlFor="inventory">Inventory</label>
					                	<input type="text" value={inventory} onChange={(e) => setInventory(e.target.value)} />
					                </div>
				                </div>
				                <div className="form-control">
				                	<label htmlFor="status">Product Status</label>
				                	<div className="mt-10">
					                	<span className="pr-20"><input type="radio" value='true' checked name="status" onChange={(e) => setStatus(e.target.value)} /> Active</span>
					                	<span><input type="radio" name="status" value='false' onChange={(e) => setStatus(e.target.value)} /> Inactive</span>
				                	</div>
				                </div>
				                <div className="form-control">
				                	<label htmlFor="description">Description</label>
				                	<textarea cols="5" rows="10" onChange={(e) => setDescription(e.target.value)}value={description}></textarea>
				                </div>
				                <button href="admin-collection.html" type="submit" className="button button--hollow  justify-end inline-block">Update</button>
				            
										</div>
										<div className="product-imageitem">
												<div id="wrapper">
													<label htmlFor="description">Product Image</label>
													<div className="mt-10">
											<div className='form-control'>
											<label htmlFor="image-text">Enter Image URL</label>
												<input type="text" name="image-text" value={image} onChange={(e) => setImage(e.target.value)}/></div>
													 	<div className="drop-zone">
														<img className="edit-img" src={image} alt={name}/>
												    	{/* <input type="text" name="myFile"  className="drop-zone__input" >Enter image url</input> */}
												  	</div>
												 	</div>
												</div>
										</div>
									</div>
							</div>
						</form>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}
export default AdminEditProductPage