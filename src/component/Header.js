import React from 'react'

const styles = {
  container: {
    padding: '3em',
    backgroundColor: 'aliceblue'
  },
  mainHeading: {
    fontSize: '7rem'
  },
  mainParagraph: {
    fontSize: '2rem'
  }
}

function Header() {
  return (
    <div style={styles.container}>
      <h1 style={styles.mainHeading}>Welcome to SocialMediaApp</h1>
      <p style={styles.mainParagraph}>Connect with like-minded friends and grow your community :)</p>
    </div>
  )
}

export default Header