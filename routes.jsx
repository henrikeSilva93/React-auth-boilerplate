import { Route, Routes } from 'react-router-dom'
import { ProtectedLayout } from './components/protectedlayout'
import Home from './pages/home'
import Login from './pages/login'
export default function AppRoute() {
    return (
        <Routes>

            <Route path="/login" element={<Login />} />
            
           
            <Route path='/home' element={<ProtectedLayout><Home /></ProtectedLayout>} />
            <Route path='/' element={<ProtectedLayout><Home /></ProtectedLayout>} />
        
        </Routes>
    )
}