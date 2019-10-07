import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar bg="light" variant="dark">
            <Nav className="mr-auto">
                <span className="mr-3"><NavLink exact className="text-decoration-none" to="/home">Home</NavLink></span>
                <span className="mr-3"><NavLink className="text-decoration-none" to="/about">About</NavLink></span>
                <span className="mr-3"><NavLink className="text-decoration-none" to="/courses">Courses</NavLink></span>
                <span className="mr-3"><NavLink className="text-decoration-none" to="/teachers">Teacher</NavLink></span>
            </Nav>
        </Navbar>
    );
};

export default NavBar;