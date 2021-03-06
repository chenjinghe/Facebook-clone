import React from 'react';
import Header from "./Header"
import Sidebar from "./Sidebar"
import Feed from "./Feed"
import './App.css';
import Widgets from "./Widgets"
import Login from "./Login"
import { useStateValue } from './StateProvider';

function App() {
  const[{user}, dispatch] = useStateValue()
  
  // "chen jinghe he"
  return (
    <div className="app">
      {!user?<Login></Login>:(
      <>
      <Header/>
      <div className="app__body">
        <Sidebar />
       <Feed/>
      <Widgets />
      </div></>)}
      
    </div>
  );
}

export default App;
