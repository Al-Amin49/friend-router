//  dui babe dynamic route navigate kora jay 
//1) link diye 2) useHistory diye
import './App.css';
import React from 'react';
import Home from './components/Home/Home'
import NotMatch from './components/NotMatch/NotMatch'
import FriendDetail from './components/FriendDetail/FriendDetail'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {

  return (
    <div >
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/friend/:friendId" element={<FriendDetail/>}/>
      <Route  path="/" element={<Home/>}/>
      <Route  path="*" element={<NotMatch/>}/>

    </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
