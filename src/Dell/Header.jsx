import React from 'react'
import { Col, Container, Row } from 'reactstrap'

export default function Header() {
    return (
        <div className="header-dell">
            <Container>
                <Row>
                    <Col md='7'>
                        <div className="text">
                            <h1>
                                THE WORLD OF
                                 DELL,
                                 EXPANDED
                            </h1>
                            <h5>
                                Bring the action anywhere with gaming laptops loaded with new features and
                                added
                                 power that dial up the fun
                            </h5>
                            <button>EXPLORE</button>
                        </div>
                    </Col>
                    <Col md='5'>
                        <div className="image ">
                            <img className='img-fluid' src="./images/dell/Dell-Laptop-Transparent-File.png" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}
