import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Customers from './pages/Customers'

const Switch = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/Customers' element={<Customers/>} />
    </Routes>
  )
}

export default Switch;
