import React from 'react'
import Header from './component/Header'
import NavbarComponent from './component/Navbar'
import Users from './component/Users';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  return (
    <div>
       <NavbarComponent />
     <Header/>
      <Users />
    </div>
  )
}

export default App
