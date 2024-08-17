import React from 'react'
import { Col, Container, Row } from 'reactstrap'

export default function Section() {
    return (
        <div className="section-dell">
            <Container>
                <Row>
                    <Col md='6'>
                        <div className="image">
                            <img className='img-fluid' src="./images/dell/Gaming-Computer-PNG-Picture.png" />
                        </div>
                    </Col>
                    <Col md='6'>
                        <div className="text">
                            <h1>
                                BEAUTY MEET <br />
                                BEAST
                            </h1>
                            <h5>
                                Meet your dream machine. Built for extreme performance and <br />
                                effortless upgradeability, and equipped with our patented <br />
                                OMEN Cryo Chamber, this is all you need
                            </h5>
                            <a href="#">
                                <h5>Learn More&gt;</h5>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>


        </div>

    )
}
