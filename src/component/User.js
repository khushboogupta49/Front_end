import React from 'react'
import { Card, Button } from 'react-bootstrap'

function User({ user }) {
  const { username, name, email, profileImage, bio } = user
  return (
    <Card style={{ width: '18rem', marginTop: '2rem' }}>
      <Card.Img variant="top" src={profileImage} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>@{username}</Card.Subtitle>
        <Card.Subtitle>{email}</Card.Subtitle>
        <Card.Text>
          {bio}
        </Card.Text>
        <Button variant="primary">+ Add connection</Button>
      </Card.Body>
    </Card>
  )
}

export default User