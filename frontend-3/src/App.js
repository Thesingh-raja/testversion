import React from 'react'
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomePage'
import ProductScreen from './screens/ProductPage'
import CartScreen from './screens/CartPage'
import LoginScreen from './screens/LoginPage'
import RegisterScreen from './screens/RegisterPage'
import ShippingScreen from './screens/ShippingPage'
import PaymentScreen from './screens/PaymentPage'
// import OrderScreen from './screens/OrderPage'

import './css/style.css'

import AdminAddProductPage from './adminPages/adminAddProductPage'
import AdminCollectionPage from './adminPages/adminCollectionPage'
import AdminCreateDiscountPage from './adminPages/adminCreateDiscountPage'
import AdminDiscountPage from './adminPages/adminDiscountPage'
import AdminEditDiscountPage from './adminPages/adminEditDiscountPage'
import AdminEditProductPage from './adminPages/adminEditProductPage'
import AdminOrderDetailsPage from './adminPages/adminOrderDetailsPage'
import AdminOrdersPage from './adminPages/adminOrdersPage'



const App = () => {
  return (
    <Router>
      <Header />
      <main className="main-vh">
        <Switch >
          <Route path='/' component={HomeScreen} exact />

          {/* <Route path='/order/:id' component={OrderScreen} /> */}
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />

          <Route path='/admin/productlist' component={AdminCollectionPage}  exact/>
          <Route path='/admin/product/:id/edit' component={AdminEditProductPage} />
          <Route path='/admin/product/create' component={AdminAddProductPage} />
          <Route path='/admin/discountlist' component={AdminDiscountPage} />
          <Route path='/admin/discount/:id/edit' component={AdminEditDiscountPage} />
          <Route path='/admin/discount/create' component={AdminCreateDiscountPage} />
          <Route path='/admin/orderlist' component={AdminOrdersPage} />
          <Route path='/admin/order/:id' component={AdminOrderDetailsPage} />
          
        </Switch >
      </main>
      <Footer />
    </Router>
  )
}

export default App
