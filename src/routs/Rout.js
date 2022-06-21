import React from "react";
import { Route, Routes } from "react-router-dom";
import DataTable from "../components/DataTable";
import Navbar from "../components/Navbar";
import Index from "../Layout/Index";

const Rout = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/order" element={<DataTable />} />
      </Routes>
    </div>
  );
};

export default Rout;
