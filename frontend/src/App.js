
import './App.css';
import MiniDrawer from './Components/MiniDrawer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AuthPage from './Pages/Auth';
import BookingPage from './Pages/Booking';
import EventPage from './Pages/Events';
import { DashBoard } from './Components/DashBoard';
import SignIn from './Pages/Authentication/Signin';
import Register from './Pages/Authentication/Register';
import { isLoggedIn } from './Service/AuthService';
import { useEffect } from 'react';






function App() {
  useEffect(()=>{
    login();
   
  })
  const login=()=>{
    const result=isLoggedIn().valueOf();
    console.log(result);
    return result;
   }
  return (
   <>
   
   
  
   <main>
   <Routes>
   <Route path='/' Component={ login?MiniDrawer:  SignIn}>
      
   </Route>

   <Route path='/Home' element={<MiniDrawer/>}></Route>
   <Route path='/signin' element={<SignIn/>}></Route>
   <Route path='/signup' element={<Register/>}></Route>
  

   
   
   <Route path='/booking' element={<BookingPage/>}></Route>
   <Route path='/events' element={<EventPage/>}></Route>

   </Routes>
   </main>
   

   </>
  );
}

export default App;
