import React, { useState, useEffect } from 'react'

const User = () => {

  const [users, setUsers] = useState([
    { name: "Hamdy", email: "ali@gmail.com", isAdmin: true },
    { name: "Mohamed", email: "mohamed@gmail.com", isAdmin: false },
    { name: "Omar", email: "omar@gmail.com", isAdmin: true },
    { name: "Khaled", email: "anas@gmail.com", isAdmin: false },
    { name: "Diaa", email: "osama@gmail.com", isAdmin: true },
  ])
  const [isAuthenticated, setAuthenticated] = useState(true)

  const toggleAuth = () => {
    setAuthenticated(!isAuthenticated)
  }

  useEffect(() => {
    console.log('DidMount ');
  }, [])
  useEffect(() => {
    console.log('DidUpdate isAuthenticated');
  }, [isAuthenticated])

  useEffect(() => {
    return () => {
      console.log('UnMounting');
    }
  }, [])

  return (
    <>
      <button className='btn btn-warning' onClick={() => toggleAuth()}>Toggle Authentication</button>
      {
        isAuthenticated ?
          (
            <ul>
              {users.map((user, index) => {
                return <li key={index}>{user.name}</li>
              })}
            </ul>
          ) : <p>Users Not Found</p>
      }



    </>
  )
}

export default User