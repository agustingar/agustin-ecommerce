import React from "react";
import {Routes, BrowserRouter as Router,Route} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Inicio from './Home/Inicio';
import Products from './components/Product/Products';
import CheckoutPage from './components/Checkout/CheckoutPage';
import SignIn from "./components/Sign-in/Signin";
import SignUp from "./components/Sign-in/Signup";
import {AuthProvider} from './hooks/useAuth';
import { ProtectedRoute } from "./components/ProtectedRoute";
import Checkout from "./components/Payment/Checkout";
import Favorites from "./components/Favorite/Favorite"


function App() {
  return (
  <>   
  <Router > 
   <AuthProvider> 
 <Routes> 
 <Route  path="/"
            element={
              <ProtectedRoute>
                <Navbar /><Inicio/>
              </ProtectedRoute>
            }
          />
			
				<Route path="/productos" element={  <ProtectedRoute>
                <Navbar /><Products/>
              </ProtectedRoute>
            } />
        <Route path="/checkout-page" element={<ProtectedRoute>
                <Navbar /><CheckoutPage/>
              </ProtectedRoute>
            }/>
            <Route path="/favorites" element={<ProtectedRoute>
                <Navbar /><Favorites/>
              </ProtectedRoute>
            }/>
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/login" element={<SignUp />}/>
        <Route path="/payment" element={<ProtectedRoute>
                <Navbar /><Checkout /> </ProtectedRoute>}/>
 </Routes>
  
 </AuthProvider>
</Router>
</>

  );
}

export default App;
