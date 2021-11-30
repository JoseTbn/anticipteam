import React from "react";
import styled from "styled-components";
import anticip from "../../assets/home.png";
import "./Navbar.css";
import { FaArrowRight } from "react-icons/fa";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Headers() {
  let navigate = useNavigate();

  return (
    <div className="container-navbar">
      <Link to="/">
        <img src={anticip} alt="" className="logo" />
      </Link>

      <nav className="nav">
        <ul>
          <li
            onClick={() => {
              navigate("/Company");
            }}
          >
            Company
          </li>
          <li
            onClick={() => {
              navigate("/Ict");
            }}
          >
            Talents
          </li>
          <li
            onClick={() => {
              navigate("/About");
            }}
          >
            About
          </li>
        </ul>
      </nav>
      <Outlet />
      <button className="button">
        Login <FaArrowRight style={{ color: "red", marginBottom: "-4px" }} />
      </button>
    </div>
  );
}
