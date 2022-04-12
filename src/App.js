import React from "react";
import { Routes, Route } from "react-router-dom";
import Users from "./Components/Users";
import AddUsers from "./Components/AddUsers";
import NavBar from "./Components/NavBar";
const App = () => {
  return (
    <div>
    <NavBar />
    <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/addusers" element={<AddUsers />} />
    </Routes>
    </div>
  )
}

export default App