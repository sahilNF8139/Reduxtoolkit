import logo from './logo.svg';
// import './App.css';
// export const baseURL = "http://192.168.0.24:3001/psapi/";

import React, { useState, useRef, useEffect } from 'react';
import AdminLogin from './Component/AdminLogin';
import ForgetPassword from './Component/ForgetPassword';
import ResetPassword from './Component/ResetPassword';


import FRlist from './Component/FRlist';
import ProfileFreelancer from './Component/ProfileFreelancer';
import Project from './Component/AddProject';
import AddTeam from './Component/Addteam';
import AddTeam22 from './Component/Addteam22';

import AddCenter from './Component/AddCenter';
import AddPeople from './Component/Addpeople';
import AssignAction from './Component/AssignAction';
import Attendance from './Component/Attendance';
import ProjectDetail from './Component/ProjectDetail';
import Centerdetails from './Component/Centerdetails';
import Expenses from './Component/Expenses';
import Dashboard from './Component/Dashboard';

import Sendmessage from './htmlPages/Sendmessage';
import Message from './htmlPages/Message';
import MessageDetails from './htmlPages/MessageDetails';
import Audits from './htmlPages/CompletedAudits';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Projects from './Component/Projects';
import Centers from './Component/Centers';
import Otp from './Component/Otp';
import CenterDetails from './Component/Centerdetails'
import Pdf from './htmlPages/Pdf';
// import Notification from '../src/Component/FCM/Notification';
import EditCenter from './Component/EditCenter';
import RoleManagement from './Component/RoleManagement';
import AssignRole from './Component/AssignRole';
import EditRole from './Component/EditRole';

import FreelancerRoleManagement from './Component/FreelancerRoleManagement';
import FreelancerAssignRole from './Component/FreelancerAssignRole';
import FreelanceEditRole from './Component/FreelanceEditRole';
import Reports from './Component/Reports';
import MyProfile from './Component/MyProfile';
import Chart from './Component/FCM/Chart';
import Logic2 from './Component/Logic2'

function App() {

  useEffect(() => {
    if (window.location.href == window.location.origin + '/') {
      if( localStorage.getItem('token')){
        window.location.href = window.location.origin + '/Dashboard'
      }else{
        window.location.href = window.location.origin + '/Login'
      }      
    }
  }, [])
  return (
    <div className="App">
      {/* <AdminLogin/> */}


      <Router>
        <Routes>

          <Route exact path="/Login" element={<AdminLogin />} />
          <Route exact path="/Otp" element={<Otp />} />
          <Route exact path="/ForgetPassword" element={<ForgetPassword />} />
          <Route exact path="/ResetPassword" element={<ResetPassword />} />


          <Route exact path="/Dashboard" element={<Dashboard />} />

          <Route exact path="/Freelancers" element={<FRlist />} />
          <Route exact path="/ProfileFreelancer" element={<ProfileFreelancer />} />
          
          <Route exact path="/Addproject" element={<Project />} />
          <Route exact path="/Projects" element={<Projects />} />
          <Route exact path="/Projectdetails" element={<ProjectDetail />} />

          <Route exact path="/Centers" element={<Centers />} />
          <Route exact path="/Addcenter" element={<AddCenter />} />
          <Route exact path="/Editcenter" element={<EditCenter/>} />

          <Route exact path="/Centerdetails" element={<CenterDetails />} />

          {/* <Route exact path="/Addteam" element={<AddTeam />} /> */}
          <Route exact path="/Addteam" element={<AddTeam22 />} />
          <Route exact path="/Addpeople" element={<AddPeople />} />
          <Route exact path="/Assignaction" element={<AssignAction />} />
          
          <Route exact path="/Attendance" element={<Attendance />} />
          <Route exact path="/Expenses" element={<Expenses />} />


          <Route exact path="/Message" element={<Message />} />
          <Route exact path="/Sendmessage" element={<Sendmessage />} />
          <Route exact path="/MessageDetails" element={<MessageDetails />} />

          
          <Route exact path="/Audits" element={<Audits />} />
          

          <Route exact path="/AdminUserManagement" element={<RoleManagement />} />
          <Route exact path="/AssignUser" element={<AssignRole />} />
          <Route exact path="/EditUser" element={<EditRole />} />

          <Route exact path="/FreelancerRoleManagement" element={<FreelancerRoleManagement />} />
          <Route exact path="/FreelancerAssignRole" element={<FreelancerAssignRole />} />
          <Route exact path="/FreelanceEditRole" element={<FreelanceEditRole />} />


          <Route exact path="/Reports" element={<Reports />} />   

          <Route exact path="/MyProfile" element={<MyProfile />} />   
          <Route exact path="/Chart" element={<Chart />} />   

          <Route exact path="/Logic2" element={<Logic2 />} />   


          

                 

          {/* <Route exact path="/Notification" element={<Notification />} /> */}

          


          

        </Routes>
      </Router>
    </div>
  );
}

export default App;
