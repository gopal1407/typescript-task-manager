import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";
import TaskDashboard from "./components/TaskDashboard";
import TaskDetails from "./components/TaskDetails";
import TaskForm from "./components/TaskForm";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";

const App: React.FC = () => (
  <TaskProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PrivateRoute component={TaskDashboard} />} />
        <Route path="/tasks/new" element={<PrivateRoute component={TaskForm} />} />
        <Route path="/tasks/edit/:id" element={<PrivateRoute component={TaskForm} />} />
        <Route path="/tasks/:id" element={<PrivateRoute component={TaskDetails} />} />
        <Route path="/profile" element={<PrivateRoute component={Profile} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </TaskProvider>
);

export default App;
