import App, { Container } from 'next/app'
import React from 'react'
class MyApp extends App {

  render(){
    const { Component } = this.props
    return (
      <Container>
        <p>Hey! I am on every page</p>
        <Component/>
      </Container>
    )
  }
}

export default MyApp
