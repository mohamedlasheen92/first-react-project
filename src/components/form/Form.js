import React, { useState } from 'react'

const UserForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: ""
  })
  const [userErrors, setUserErrors] = useState({
    usernameError: "",
    emailError: ""
  })
  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
    if (event.target.name === "username") {
      const theLength = event.target.value.length
      setUserErrors({
        ...userErrors,
        usernameError: theLength === 0 ? "This field is required" : theLength > 10 ? "The maximum length is 10" : null
      })
    } else if (event.target.name === "email") {
      const theLength = event.target.value.length
      setUserErrors({
        ...userErrors,
        emailError: theLength === 0 ? "This field is required" : theLength > 10 ? "The maximum length is 10" : null
      })

    }
  }
  const handleSubmit = (event) => {
    if (userErrors.usernameError === null && userErrors.emailError === null) {
      event.target.submit()

    } else {
      event.preventDefault()
    }
  }
  return (
    <>

      <div className='mt-5'>
        <form onSubmit={(event) => handleSubmit(event)}>

          <div className="mb-3">
            <label htmlFor="exampleInputUsername" className="form-label">Username</label>
            <input type="text" id="exampleInputUsername"
              className={`form-control shadow-none ${userErrors.usernameError && "border-danger border-3"}`}
              name="username"
              value={user.username}
              onChange={(event) => handleChange(event)}
            />
            {/*<small className='text-danger'>{user.username.length === 0 ? "This field is required" : user.username.length > 10 ? "The Maximum Length is 10" : ""}</small>*/}
            <small className='text-danger'>{userErrors.usernameError}</small>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="text" id="exampleInputEmail1"
              className={`form-control shadow-none ${userErrors.emailError && "border-danger border-3"}`}
              name="email"
              value={user.email}
              onChange={(event) => handleChange(event)}
            />
            <small className='text-danger'>{userErrors.emailError}</small>
          </div>

          <button type="submit" className="btn btn-primary" >Submit</button>

        </form>
      </div>




    </>
  )
}

export default UserForm