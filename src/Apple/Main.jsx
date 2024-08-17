import React from 'react'
import { Col, Container, Row } from 'reactstrap'

export default function Main() {
    return (
        <div>
            <div className="maintwo">
                <Container>
                    <Row>
                        <Col md='6'>
                            <div className="text">
                                <h5>13” model with M1 chip</h5>
                                <h1>MacBook Air</h1>
                                <h4>The most affordable Mac laptop to get things done on the go.</h4>
                            </div>
                        </Col>
                        <Col md='6'>
                            <div className="image ">
                                <img className='img-fluid' src="./images/apple/mac-computer-screen-png-mac-desktop-repairs-450.png" />
                            </div>
                        </Col>
                        <Col md='6'>
                            <div className="image2 d">
                                <img className='img-fluid' src="./images/apple/71pcTYT+ICL._AC_SX342_SY445_.jpg" />
                            </div>
                        </Col>
                        <Col md='6'>
                            <div className="text2">
                                <h3>Apple 2020 Mac Mini M1 Chip (8GB RAM, 256GB SSD Storage)</h3>
                                <h2>-28% $499.95</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>


            <div className="end ml-auto mr-auto text-center">
                <h1>MAC</h1>
            </div>
        </div>
    )
}
