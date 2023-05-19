import './App.css';
import { Fragment } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import Login from './login';
import { useSelector } from 'react-redux';

function App() {
  const { isAnthentication } = useSelector((state) => state.user);
  return (
 
<Fragment>


  
<BrowserRouter>

        <Routes>
        <Route path="/" element={isAnthentication ? <ScreenA /> : <Login/>} />
         <Route path="/login" element={<Login/>} />
        <Route path="/screenB" element={<ScreenB />} />

        </Routes>
</BrowserRouter>

</Fragment>
);
}

export default App;
