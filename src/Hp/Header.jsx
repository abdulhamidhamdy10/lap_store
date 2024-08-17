import React from 'react'
import { Col, Container, Row } from 'reactstrap'

export default function Header() {
    return (
        <div>
            <div className="header-hp">
                <Container>
                    <Row>
                        <Col md='4'>
                            <div className="picone">
                                <img className='img-fluid' src="./images/hp/HP-Laptop-PNG-Transparent.png" />
                            </div>
                        </Col>
                        <Col md='4'>
                            <div className="pictwo">
                                <img className='img-fluid' src="./images/hp/csm_HP_Pavilion_Gaming_Laptop_FrontOpen_ShadowBlack_GhostWhite_7b31d61115.png" />
                            </div>
                        </Col>
                        <Col md='4'>
                            <div className="text">
                                <h1>
                                    HP Dragonfly <br /> Pro &amp; HP <br />
                                    Dragonfly Pro <br /> Chromebook
                                </h1>
                                <h2>Hypred Performance</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>



            </div>
        </div>
    )
}
