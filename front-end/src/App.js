import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import MyProvider from './context/MyProvider';
import Register from './components/Register';
import ClientPage from './pages/ClientPage';
import LoginPage from './pages/LoginPage';
import NotFound from './pages/NotFound';
import OrderDetailsPage from './pages/OrderDetailsPage';
import CheckoutPage from './pages/CheckoutPage';
import SellerOrdersDetailPage from './pages/SellerOrdersDetailPage';
import SellerOrdersPage from './pages/SellerOrdersPage';
import AdminPage from './pages/AdminPage';
import AdminUsersPage from './pages/AdminUsersPage';
import customerOrdersPage from './pages/CustomerOrdersPage';
import AdminProductPages from './pages/AdminProductsPage';
import AdminOrders from './pages/AdminOrders';

function App() {
  return (
    <div>
      <MyProvider>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route path="/login" component={ LoginPage } />
          <Route path="/register" component={ Register } />
          <Route exact path="/customer/products" component={ ClientPage } />
          <Route exact path="/customer/checkout" component={ CheckoutPage } />
          <Route exact path="/seller/orders/" component={ SellerOrdersPage } />
          <Route exact path="/customer/orders/:id" component={ OrderDetailsPage } />
          <Route exact path="/seller/orders/:id" component={ SellerOrdersDetailPage } />
          <Route exact path="/admin/manage" component={ AdminPage } />
          <Route exact path="/admin/manage/users" component={ AdminUsersPage } />
          <Route
            exact
            path="/admin/orders/products"
            component={ AdminProductPages }
          />
          <Route
            exact
            path="/admin/orders/orders"
            component={ AdminOrders }
          />
          <Route exact path="/customer/orders" component={ customerOrdersPage } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </MyProvider>
    </div>
  );
}

export default App;
