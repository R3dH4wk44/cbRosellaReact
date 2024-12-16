import { Routes, Route} from 'react-router-dom'
import './App.css'
import Inici from '@pages/inici';
import QuiSom from '@pages/quisom';
import TresPerTres from '@pages/trespertres';
import Noticies from '@pages/noticies';
import Contacte from '@pages/contacte';
import NotFound from '@pages/notfound';
import Campus from '@pages/campus';
import Tenda from '@pages/tenda';
import Equips from '@pages/equips';
import Equip from '@pages/equip';
import AdminLogin from '@pages/adminlogin';
import AdminDashboard from '@pages/admindashboard';
import Login from '@pages/login';
import Register from '@pages/register';
import NavBar from '@components/NavBar';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inici/>} />
        <Route path="/qui-som" element={<QuiSom />} />
        <Route path="/contacte" element={<Contacte />} />
        <Route path="/noticies" element={<Noticies />} />
        <Route path="/3x3" element={<TresPerTres />} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/tenda" element={<Tenda />} />
        <Route path="/equips" element={<Equips />} />
        <Route path='/equip/:nom' element={<Equip />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
