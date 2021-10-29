import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';

import Login from './Pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import MyOrders from './Pages/MyOrders/MyOrders';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';
import AddService from './Pages/AddService/AddService';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from '../src/Pages/Login/PrivateRoute/PrivateRoute';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/myOrders">
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute exact path="/manageOrders">
            <ManageAllOrders></ManageAllOrders>
          </PrivateRoute>
          <PrivateRoute exact path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
