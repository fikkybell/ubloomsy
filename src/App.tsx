// import { useState } from 'react'
import Dashboard from './pages/dashboard'
import DashboardLayout from './components/layouts/dashboardLayout'
import Goals from './features/goals'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Moodboard from './features/moodboard';

function App() {
 

  return (
    <Router>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="goal" element={<Goals/>} />
          <Route path="moodboard" element={<Moodboard/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
