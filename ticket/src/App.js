import logo from './logo.svg';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Forgot from './Components/Forgot';
import Layout from './Components/Layout';
import Profile from './Components/Profile';
import Dashboard from './Components/Dashboard';
import NewTicket from './Components/newTicket';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/reset-password" element={<Forgot />}></Route>
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/new-ticket" element={<NewTicket />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
