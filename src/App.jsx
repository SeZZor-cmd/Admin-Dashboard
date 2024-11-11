
import Dashboard from './pages/Admin/Dashboard';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Employees from './pages/Admin/Employees';
import Leads from './pages/Admin/Leads';
import Clients from './pages/Admin/Clients';
import Vendors from './pages/Admin/Vendors';
import Admin from './pages/Admin/Admin';
import Field from './pages/Admin/Field';
import Questions from './pages/Admin/Questions';

import Layout from './components/Layout';

import Employee from './pages/Employee/Employee';
import EDashboard from './pages/Employee/EDashboard';
import ELeads from './pages/Employee/ELeads';

import Verifier from './pages/Verifier/Verifier';
import VDashboard from './pages/Verifier/VDashboard';
import VLeads from './pages/Verifier/VLeads';
import VVerified from './pages/Verifier/VVerified';

import Client from './pages/Client/Client';
import CDashboard from './pages/Client/CDashboard';
import CLeads from './pages/Client/CLeads';

import Vendor from './pages/Vendor/Vendor';
import VendorDashboard from './pages/Vendor/vendorDashboard';
import VendorLeads from './pages/Vendor/vendorLeads';

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route path="/" element={<Admin />} />
        
        {/* Admin Layout */}
        <Route element={<Layout panelType="Admin" />}>
          <Route path="/Admin/Dashboard" element={<Dashboard />} />
          <Route path="/Admin/Employees" element={<Employees />} />
          <Route path="/Admin/Leads" element={<Leads />} />
          <Route path="/Admin/Clients" element={<Clients />} />
          <Route path="/Admin/Vendors" element={<Vendors />} />
          <Route path="/Admin/Field" element={<Field />} />
          <Route path="/Admin/Questions" element={<Questions />}/>
        </Route>
        
        {/* Employee Routes */}
        <Route path="/Employee" element={<Employee />} />

        {/* Employee Layout */}
        <Route element={<Layout panelType="Employee" />}>
          <Route path="/Employee/Dashboard" element={<EDashboard />} />
          <Route path="/Employee/Leads" element={<ELeads />} />
        </Route>

         {/* Verifier Routes */}
         <Route path="/Verifier" element={<Verifier />} />

          {/* Verifier Layout */}
          <Route element={<Layout panelType="Verifier" />}>
            <Route path="/Verifier/Dashboard" element={<VDashboard />} />
            <Route path="/Verifier/Leads" element={<VLeads />} />
            <Route path='/Verifier/Verified' element={<VVerified />} />
          </Route>

          {/* Client Routes */}
         <Route path="/Client" element={<Client />} />

         {/* Client Layout */}
         <Route element={<Layout panelType="Client" />}>
            <Route path="/Client/Dashboard" element={<CDashboard />} />
            <Route path="/Client/Leads" element={<CLeads />} /> 
          </Route>

          {/* Vendor Routes */}
         <Route path="/Vendor" element={<Vendor />} />

          {/* Vendor Layout */}
          <Route element={<Layout panelType="Vendor" />}>
            <Route path="/Vendor/Dashboard" element={<VendorDashboard />} />
            <Route path="/Vendor/Leads" element={<VendorLeads />} /> 
          </Route>
      </Routes>
    </Router>
  );
}

export default App;
