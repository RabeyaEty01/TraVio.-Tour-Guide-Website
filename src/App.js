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
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import TourGuide from './Pages/TourGuide/TourGuide';
import AddTourGuide from './Pages/AddTourGuide/AddTourGuide';
import ManageEmployee from './Pages/ManageEmployee/ManageEmployee';
import AdminDashboard from './Pages/AdminDashBoard/AdminDashboard';
import Registration from './Pages/Registration/Registration';

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
          <PrivateRoute exact path="/services/booking/:id">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>

          <PrivateRoute exact path="/adminDashboard">
           <AdminDashboard></AdminDashboard>
          </PrivateRoute>

          <PrivateRoute exact path="/manageEmployee">
           <ManageEmployee></ManageEmployee>
          </PrivateRoute>

          <PrivateRoute exact path="/addEmployee">
           <AddTourGuide></AddTourGuide>
          </PrivateRoute>

          <Route exact path="/tourGuide">
           <TourGuide></TourGuide>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Registration></Registration>
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
