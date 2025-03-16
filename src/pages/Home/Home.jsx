import React from "react";
import "../scss/home.css";
import NavBar from "../../components/NavBar";
import { Outlet } from "react-router-dom";
export default function Home() {
  return (
    <div className="home">
      <NavBar />
      <Outlet/>
    </div>
  );
}
