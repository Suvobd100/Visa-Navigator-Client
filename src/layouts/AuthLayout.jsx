import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

const AuthLayout = () => {
  return (
    <div>
    <header>
      {/* <AuthNav/> */}
      <h2>Auth NAV</h2>
    </header>
    <main>
        <Outlet/>
    </main>
    <footer><Footer/></footer>
</div>
  )
}

export default AuthLayout