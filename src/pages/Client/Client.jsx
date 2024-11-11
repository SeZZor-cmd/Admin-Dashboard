import React from 'react'
import SignInForm from '../../components/SignInForm'

function Client() {
  return (
    <SignInForm panelType="Client" redirectUrl="/Client/Dashboard" />

  )
}

export default Client