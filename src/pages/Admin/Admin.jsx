import React from 'react'
import SignInForm from '../../components/SignInForm'

function Admin() {
  return (
    <SignInForm panelType="Admin" redirectUrl="/Admin/Dashboard" />
  )
}

export default Admin