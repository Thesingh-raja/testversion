



  

import React, { useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listOrders } from '../actions/orderActions'
const AdminOrdersPage = ({ history })=>{

    const dispatch = useDispatch()

      const orderList = useSelector((state) => state.orderList)
      const { loading, error, orders } = orderList
    
      const userLogin = useSelector((state) => state.userLogin)
      const { userInfo } = userLogin
    
      useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
          dispatch(listOrders())
        } else {
          history.push('/login')
        }
      }, [dispatch, history, userInfo])

    return (
        <section class="flex">
        <div class="container-fluid">
            <div class="admin-content">
                <div class="admin-left-nav mt-20">
                    <ul>
                            <li><Link  to="/admin/productlist">Products</Link></li>
							<li><Link className="active" to="/admin/order">Orders</Link></li>
							<li><Link  to="/admin/discountlist">Discount</Link></li>
                    </ul>
                </div>
                <div class="admin-right page-content">
                    <div class="products-list">
                        <div class="actions flex items-center">
                            <h3>Orders</h3>
                        </div>
                        <div class="added-products">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>S. No</th>
                                        <th>Order No.</th>
                                        <th>Date</th>
                                        <th>Payment Status</th>
                                        <th>Fulfillment Status</th>
                                        <th>Items</th>
                                        <th class="text-right">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>01</td>
                                        <td><Link to="/admin/order/:id"><u>#10001</u></Link></td>
                                        <td>Mar 01, 2022</td>
                                        <td>Paid</td>
                                        <td>Fulfilled</td>
                                        <td>1 items</td>
                                        <td class="text-right">$290</td>
                                    </tr>
                                    <tr>
                                        <td>02</td>
                                        <td><Link to="/admin/order/:id"><u>#10002</u></Link></td>
                                        <td>Mar 01, 2022</td>
                                        <td>Paid</td>
                                        <td>Fulfilled</td>
                                        <td>2 items</td>
                                        <td class="text-right">$390</td>
                                    </tr>
                                    <tr>
                                        <td>03</td>
                                        <td><Link to="/admin/order/:id"><u>#10003</u></Link></td>
                                        <td>Mar 01, 2022</td>
                                        <td>Paid</td>
                                        <td>Fulfilled</td>
                                        <td>4 items</td>
                                        <td class="text-right">$550</td>
                                    </tr>
                                    <tr>
                                        <td>04</td>
                                        <td><Link to="/admin/order/:id"><u>#10004</u></Link></td>
                                        <td>Mar 01, 2022</td>
                                        <td>Paid</td>
                                        <td>Fulfilled</td>
                                        <td>1 items</td>
                                        <td class="text-right">$290</td>
                                    </tr>
                                    <tr>
                                        <td>05</td>
                                        <td><Link to="/admin/order/:id"><u>#10005</u></Link></td>
                                        <td>Mar 01, 2022</td>
                                        <td>Paid</td>
                                        <td>Fulfilled</td>
                                        <td>3 items</td>
                                        <td class="text-right">$375</td>
                                    </tr>
                                    <tr>
                                        <td>06</td>
                                        <td><Link to="/admin/order/:id"><u>#10006</u></Link></td>
                                        <td>Mar 01, 2022</td>
                                        <td>Paid</td>
                                        <td>Fulfilled</td>
                                        <td>4 items</td>
                                        <td class="text-right">$620</td>
                                    </tr>
                                    <tr>
                                        <td>07</td>
                                        <td><Link to="/admin/order/:id"><u>#10007</u></Link></td>
                                        <td>Mar 01, 2022</td>
                                        <td>Paid</td>
                                        <td>Fulfilled</td>
                                        <td>10 items</td>
                                        <td class="text-right">$880</td>
                                    </tr>
                                    <tr>
                                        <td>08</td>
                                        <td><Link to="/admin/order/:id"><u>#10008</u></Link></td>
                                        <td>Mar 01, 2022</td>
                                        <td>Paid</td>
                                        <td>Fulfilled</td>
                                        <td>1 items</td>
                                        <td class="text-right">$190</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default AdminOrdersPage