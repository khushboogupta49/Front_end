import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import User from './User'
import axios from 'axios'

function Users() {
  const [users, setUsers] = useState([])
  const [newUser, setNewUser] = useState({
    "username": "priya_rai",
    "name": "Priya Rai",
    "email": "priya@gmail.com",
    "profileImage": "https://reqres.in/img/faces/2-image.jpg",
    "bio": "I'm 25. I love singing :)",
  })
  
  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = () => {
    axios.get('http://localhost:4000/api/users')
      .then((res) => setUsers(res.data.data))
      .catch((error) => console.log(error))
  }

  const createUser = () => {
    axios.post('http://localhost:4000/api/users', newUser)
      .then((res) => fetchUsers())
      .catch((error) => console.log(error))
  }

  return (
    <Container>
      <Row>
        {users.map(user => (
          <Col md={3} key={user._id}>
            <User user={user} />
          </Col>
        ))}
      </Row>
      <Button onClick={createUser} style={{ marginTop: '5rem'}}>Add new user</Button>
    </Container>
  )
}

export default Users