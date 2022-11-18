
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'

function App() {

  const [usersList, setUsersList] = useState([])
  const [usersSelected, setUsersSelected] = useState(null)


  useEffect(() => {
    axios.get(`https://users-crud1.herokuapp.com/users/`)
      .then(res => setUsersList(res.data))

  }, [])

  const getUsers = () => {
    axios.get(`https://users-crud1.herokuapp.com/users/`)
      .then(res => setUsersList(res.data))

  }

  const selectUsers = (users) => {

    setUsersSelected(users)

  }

 // console.log(usersList)

  const deselectUsers = () => setUsersSelected(null)

  const deleteUser = (id) => {
    axios
    .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then(res => setUsersList(res.data))
  } 

  

  return (
    <div className="App">
      <UsersList
        usersList={usersList}
        selectUsers={selectUsers}
        deleteUser={deleteUser}
         />

      <UsersForm
        getUsers={getUsers}
        usersSelected={usersSelected}
        deselectUsers={deselectUsers} />

    </div>
  )
}

export default App
