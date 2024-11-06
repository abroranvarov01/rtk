import React from "react";
import { Route, Routes } from "react-router-dom";
import Users from "./pages/users";
import UserDetail from "./pages/user-detail";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Users />}></Route>
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </>
  );
}

export default App;
