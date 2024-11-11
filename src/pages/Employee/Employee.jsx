import React from 'react'
import SignInForm from '../../components/SignInForm'

function Employee() {
  return (
    <SignInForm panelType="Employee" redirectUrl="/Employee/Dashboard" />
  )
}

export default Employee