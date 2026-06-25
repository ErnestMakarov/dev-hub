import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar.jsx'

export default function App() {
  return (
    <>
        <Sidebar />
        <Outlet />
    </>
  )
}
