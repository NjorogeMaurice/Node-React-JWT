
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './pages/Register';
import LoginPage from './pages/Login';
import Home from './pages/Home';
import LogOut from './pages/logout';

function App() {
  return (
    <>

    {/* <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8"> */}
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/logout" element={<LogOut/>} />
            <Route path="/home/:type" element={<Home/>} />
        </Routes>
      </BrowserRouter>
   {/* </div> */}
  {/* </div> */}

  </>
  );
}

export default App;
