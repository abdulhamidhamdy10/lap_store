import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

function Navbar() {
    return (
        <div className='Navigation'>
            <nav className="navbar navbar-expand-lg  ">
                <Link style={{ fontSize:"30px",color:"rgb(255, 106, 0)" }} className="navbar-brand nav-link" to="/">
                    <i  class="fa-solid fa-laptop-code"></i>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/Apple">
                                Apple
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/Hp">
                                Hp
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/Dell">
                                Dell
                            </Link>
                        </li>

                    </ul>

                    <div className="form-inline my-2 my-lg-0">
                        <div className='mr-3 '>
                            <Link to='/Products' className='nav-link'>
                                <i class="fa-solid fa-bookmark nav-link"></i>
                            </Link>
                        </div>
                        <div className='mr-3'>
                            <Link to='/Cart' className='nav-link'>
                                <i class="fa-solid fa-cart-plus "></i>
                            </Link>
                        </div>
                        <button className=" my-2 my-sm-0" type="submit">
                            <Link to='/Signup' className="nav-link">
                                Sign Up
                            </Link>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar