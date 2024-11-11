import React from 'react'
import SignInForm from '../../components/SignInForm'

function Vendor() {
  return (
    <SignInForm panelType="Vendor" redirectUrl="/Vendor/Dashboard" />
  )
}

export default Vendor