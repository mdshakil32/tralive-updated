
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AddNewPlace from './Components/AddNewPlace/AddNewPlace';
import Booking from './Components/Booking/Booking';
import Contact from './Components/Contact/Contact';
import AuthProvider from './Components/Context/AuthProvider';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import ManageAllOrder from './Components/ManageAllOrder/ManageAllOrder';
import MyOrders from './Components/MyOrders/MyOrders';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import WeOffer from './Components/WeOffer/WeOffer';


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

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/manageAllOrder">
              <ManageAllOrder></ManageAllOrder>
            </Route>

            <Route path="/myOrders">
              <MyOrders></MyOrders>
            </Route>

            <Route path="/addNewPlace">
              <AddNewPlace></AddNewPlace>
            </Route>

            <PrivateRoute path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>

            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
