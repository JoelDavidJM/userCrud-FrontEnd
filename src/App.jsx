
import { useEffect, useState } from 'react'
import './App.css'
import UserCard from './components/UserCard'
import UserForm from './components/UserForm'
import useFetch from './hooks/useFetch'

function App() {

  const [userUpdate, setUserUpdate] = useState()

  const baseUrl = 'https://users-crud-8gtr.onrender.com'

  const [users, getUser, createUser, deleteUser, updateUser] = useFetch(baseUrl)

  useEffect(() => {
    getUser()
  },[])

  return (
    <div className='app__container'>
      <div className='app__container2'> 
        <UserForm
       createUser={createUser}
       userUpdate={userUpdate}
       updateUser={updateUser}
       setUserUpdate={setUserUpdate}
        />
      </div>
        <div className='app__container3'>
          {
            users?.map(user => (
              <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setUserUpdate={setUserUpdate}
              />
            ))
          }
        </div>
    </div>
  )
}

export default App
