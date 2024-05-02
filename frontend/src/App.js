import {BrowserRouter,Routes,Route}from'react-router-dom'
//pages and componests
import Home from './pages/Home';
import NavbarNew from './components/Navbar';
import Signup from './pages/login/Signup';
import Login from './pages/login/Login';
import Users from './pages/Users';
import UpdateOil from './pages/(logged-in)/inventory-manager/UpdateOil';
import CashierDashBoard from './pages/(logged-in)/cashier/CashierDashBoard';
import BarcodeScanner from './pages/(logged-in)/cashier/BarcodeScanner';
import Counter from './pages/Counter';
import Sidebar from './components/Sidebar';
// import LoginForm from './pages/login/Login2';
import Login2 from './pages/login/Login2';
import AddOil from './pages/(logged-in)/inventory-manager/AddOil';
import DashBoard from './pages/DashBoard';

// import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
       
        <div className="pages">
          <Routes>
            <Route
            path="/"
            element={<Signup/>}
            />
          
            <Route
            path="/users"
            element={<Users/>}
            />
            <Route
            path="/login"
            element={<Login/>}
            />
            <Route
            path="/signup"
            element={<Signup/>}
            />
            <Route
            path="/update/:id"
            element={<UpdateOil/>}
            />
            <Route
            path="/cashierdash"
            element={<BarcodeScanner/>}
            />
            <Route
            path="/counter"
            element={<Counter/>}
            />
            <Route
            path="/login2"
            element={<Login2/>}
            />
            <Route
            path="/addProducts"
            element={<AddOil/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    <div>
      
    </div>
     {/* <div className='sidebar'>
     <Sidebar></Sidebar>
     </div> */}
      
    </div>
  );
}

export default App;
