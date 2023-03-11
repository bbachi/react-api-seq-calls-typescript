import React, { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header'
import { Users } from './components/Users'
import { Loader } from './components/Loader'
import { UserService } from './services/user.service'

function App() {

  const userService = new UserService();

  const [users, setUsers] = useState([])

  useEffect(() => {
    userService.getUserInfo().then(data => setUsers(data));
  }, [])

  return (
    <div className="App">
      <Header></Header>
      {users.length === 0 
        ? 
          <Loader />
        :
          <div className="container mrgnbtm">
            <Users users={users}></Users>
          </div>
      }
    </div>
  )
}

export default App;
