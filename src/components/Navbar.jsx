import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
    <Link to="/" className="navbar-brand">FoodParadise</Link>
  </nav>
)


export default Navbar

