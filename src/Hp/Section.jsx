import React from 'react'
import { Col, Container, Row } from 'reactstrap'

export default function Section() {
    return (
        <div className="section-hp">
            <Container>
                <Row>
                    <Col md='6'>
                        <div className="picone">
                            <img className='img-fluid' src="./images/hp/Desktop-Computer-PNG-Free-Download.png" />
                            <br />
                            <img className="logo img-fluid" src="./images/Hewlett-Packard-Logo-2008-2014.png" />
                        </div>
                    </Col>
                    <Col md='6'>
                        <div className="text">
                            <h1>HP Pro PC</h1>
                            <h3>Everyday gaming</h3>
                            <h3>
                                Customize and design your gaming laptop to your ,<br />
                                specs, inside and out
                            </h3>
                            <h3>
                                Starting at $809.99*
                                <br />
                                Prec ision color display
                            </h3>
                            <hr />
                            <h3>High-speed graphics</h3>
                            <hr />
                            <h3>Creative color presets</h3>
                            <hr />
                            <button>Learn</button>
                        </div>
                    </Col>
                </Row>
            </Container>


        </div>

    )
}
