
import './App.css'
import {Dashboard} from "./pages/admin/Dashboard";
import {Login} from "./auth/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Index } from './pages/client/Index';

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
  )
}

export default App
