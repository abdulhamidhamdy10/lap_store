import React from 'react'
import { Col, Container, Row } from 'reactstrap'

export default function Header() {
    return (
        <div>
            <Container className='header'>
                <Row>
                    <Col md='12'>
                        <div className="">
                            <h1 className='text-center mb-5 mt-5'>____________________PRODUCTS_____________________</h1>
                            <div className="images">
                                <img className='img-fluid' src="./images/apple-ios-logo-png-webmyne-systems-is-an-iphone-application-development-company-in-india-providing-custom-apps-across-the-globe-get-robust-and-full-cycle-ios-apps-game-1024.png" />
                                <img className="img-fluid" src="./images/dell-logo-png-open-2000.png" />
                                <img style={{ width:"300px" }} className="img-fluid" src="./images/Hewlett-Packard-Logo-2008-2014.png" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
