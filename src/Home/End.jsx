import React from 'react'
import { Col, Container, Row } from 'reactstrap'

export default function End() {
    return (
        <div>
            <div className="end">
                <Container>
                    <div className="endone">
                        <Row>
                            <Col md='6'>
                                <div className="movies">
                                    <h2>MOVIES</h2>
                                    <img src="./images/Best-Movies-Netflix.avif" className='img-fluid' />
                                </div>
                            </Col>
                            <Col md='6'>
                                <div className="gaming">
                                    <h2>GAMING</h2>
                                    <img src="./images/best-ps4-exclusives-playstation-4-1.original.jpg" className='img-fluid' />
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="endtwo">
                        <div className="images">
                            <img className='img-fluid' src="./images/0011.1367461678.0.jpg" />
                            <img className='img-fluid' src="./images/amd-brand-logo.png" />
                            <img className='img-fluid' src="./images/amd-ryzen-logo-wallpaper.jpg" />
                            <img className='img-fluid' src="./images/nvidia-brand-logo-2-2932x2932.jpg" />
                        </div>
                    </div>
                </Container>

            </div>
        </div>
    )
}
