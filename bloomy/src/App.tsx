// import { useState } from 'react'
import Dashboard from './pages/dashboard'
import DashboardLayout from './components/layouts/dashboardLayout'
import Goals from './features/goals'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
 

  return (
    <Router>
      <Routes>
        {/* Wrap dashboard routes with the layout */}
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="goal" element={<Goals/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
