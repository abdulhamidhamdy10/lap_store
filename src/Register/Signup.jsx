import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function Signup() {
    return (
        <div>
            <Navbar />
            <div className="form-sign ">
                <Container>
                    <Row>
                        <Col md='6'>
                            <form action="/submit_form" method="post">
                                <div className="elementform">
                                    <label htmlFor="username">User Name:</label>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        placeholder="Enter your Username"
                                        required=""
                                    />
                                    <br />
                                    <br />
                                    <label htmlFor="email">Email Address:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your e-mail"
                                        required=""
                                    />
                                    <br />
                                    <br />
                                    <label htmlFor="password">Password:</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        required=""
                                    />
                                    <br />
                                    <br />
                                    <label htmlFor="phone">Phone Number:</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="Enter your phone"
                                        required=""
                                    />
                                    <br />
                                    <br />
                                    <label htmlFor="address">Address:</label>
                                    <input
                                        id="address"
                                        name="address"
                                        placeholder="Enter your Address"
                                        required=""
                                    />
                                    <br />
                                    <br />


                                </div>

                                <div className='register'>
                                    <span>
                                        <input className="button" type="submit" defaultValue="Submit" />
                                    </span>
                                    <div>
                                        <a className='link' href="#">
                                            Sign in
                                        </a>
                                    </div>

                                </div>
                            </form>
                        </Col>
                        <Col md='6'>
                            <div className="maps">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27134.5022342528!2d31.325820298385594!3d30.067117127779472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sar!2seg!4v1702756273967!5m2!1sar!2seg"
                                    width={1063}
                                    height={450}
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </Col>


                    </Row>
                </Container>


            </div>
            <Footer />
        </div>
    )
}
